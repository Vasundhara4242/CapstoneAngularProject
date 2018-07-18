import { Component, OnInit, Input} from '@angular/core';
import { Message } from './message';
import { MessageService } from './../services/message.service'
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgForm } from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})


export class MessageComponent implements OnInit, OnChanges{
messages: any[];
userdata: string;
message: any;
receiver: string;
circle: string;
type: string;
msg: Message;
Messagename:string;
status:string;
outmessageObj:object;

 @Input() messageObj:object;


  constructor(private messageservice:MessageService,private userService: UserService) { }

  getMessages()
  {

  }


  ngOnInit() {
  //  let message = new Message();
  //   this.message = message.getmessage();
    this.getMessages();
  }

  ngOnChanges(value) {
    this.outmessageObj=this.messageObj;
      console.log('value is ', value);
      console.log('object in messgae', value.messageObj.currentValue.value);
      this.Messagename=value.messageObj.currentValue.value;
      this.messages = [];
      this.type = value.messageObj.currentValue.type;
      if(value.messageObj.currentValue.type === 'User')
      {
        this.receiver = value.messageObj.currentValue.value;
        this.messageservice.getMessagesFromUser(value.messageObj.currentValue.value).subscribe(data =>
        {
          this.messages = data.json();
        });
        this.userService.getStatus(value.messageObj.currentValue.value).subscribe(
          data=>
          {
            this.status =data.json();

           console.log("Status: "+ status);
          }
        );
      }
      else{
        this.receiver = value.messageObj.currentValue.value;
        this.messageservice.getMessagesByCircle(value.messageObj.currentValue.value).subscribe(data =>
        {
          this.messages = data.json();
        })
      }
  }

    onClick(message: any, type: string)
    {
      this.message = "";

      console.log("type is " + type);
      console.log("message is " + message);
       var request = { 'message': message};
       this.msg = new Message();
       this.msg.message = message;
       this.msg.receiverId=this.receiver;
       this.msg.senderName=localStorage.getItem('username');

       if(type === 'User')
       {
         console.log("message",this.msg);
         this.messageservice.sendMessagesToUser(this.msg).subscribe(
           data => {
             if(data.status == 200)
             {
               let msgobj = {
                 "senderName" : localStorage.getItem("username"),
                 "receiverId" : this.receiver,
                 "message": message
               }
               console.log("Message object"+msgobj);
               this.messages.push(msgobj);
             }
           }
         )
       }
       else
       {
        this.messageservice.sendMessagesToCircle(this.msg).subscribe(
          data => {
            if(data.status == 200)
            {
              let msgobj = {
                "senderName" : localStorage.getItem("username"),
                "receiverId" : this.receiver,
                "message": message
              }
              this.messages.push(msgobj);
            }
          }
        )
       }

    }

  }
