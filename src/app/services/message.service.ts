import { Message } from './../message/message';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class MessageService {
    constructor(private http: Http) { }
    username: string;
    circle: string;
    // circleName:String;
    headerObj = new Headers({
        "Authorization" : 'Bearer '+ localStorage.getItem('token') 
    });
    
    private MESSAGE_SERVICE_BASE_URL = 'http://localhost:8086/api/message/';

    getMessages():any{
        let obj = new Message();

        // return obj.getmessage();
    }

    getMessagesFromUser(userName:any)
    {
        this.username = userName;
        console.log('inside user service', userName);
        return this.http.get(this.MESSAGE_SERVICE_BASE_URL+'getMessagesByUser/' + localStorage.getItem('username') +'/' + userName +  '/' + 2, {headers:this.headerObj});
    }

    sendMessagesToUser(message:Message)
    {
       
        return this.http.post(this.MESSAGE_SERVICE_BASE_URL+'sendMessageToUser/' + message.receiverId+'/',message, {headers:this.headerObj})
    }

    getMessagesByCircle(circle)
    { 
        this.circle = circle;
        return this.http.get(this.MESSAGE_SERVICE_BASE_URL+'getMessagesByCircle/' + circle +  '/' + 2, {headers:this.headerObj});

    }

    sendMessagesToCircle(message:Message)
    {
        return this.http.post(this.MESSAGE_SERVICE_BASE_URL+'sendMessageToCircle/' + this.circle +'/',message, {headers:this.headerObj})
    }


}