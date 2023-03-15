import { Component, OnInit } from '@angular/core';
import { ChatBotService, Message } from './chat-bot.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  messages: Message[] = [];
  value: string;
  http: any;
  constructor(public chatService: ChatBotService) { }
  ngOnInit() {
    debugger;
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
      console.log(this.messages);
    });
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  retrieverepsonse(){
    let jsonObj = {
      query: this.value
    };
    const urlofApi= 'http://127.0.0.1:5000' + jsonObj;
    this.http.post(urlofApi)
    .subscribe(
      (res: Response) => 
        {
          const searchResult = res.json();  
          console.log(searchResult);
        }
    );
  }
}
