import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from './user';
import { UserService } from './../services/user.service'
import { get } from 'selenium-webdriver/http';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
  statuses:User[];

  @Output() selectedUser = new EventEmitter<any>();

  constructor(private userservice:UserService) { }


  selectUser(userdata:string)
  {
    console.log('User name' , userdata);
    console.log('Status' ,status);

    let currentUserName = {
      type: 'User',
      value:userdata
    };
      this.selectedUser.emit(currentUserName);

      let currentStatus = {
        type : 'User',
        value:userdata
      };

  }


getUsers()
{
  console.log("inside user component");
  this.userservice.getUsers().subscribe(data =>{
      this.users = data.json();
  });
}

ngOnInit() {
    this.getUsers();

  }
/*
getStatus()
{
  console.log("inside new status component");
  this.userservice.getStatus().subscribe(data =>{
    this.statuses = data.json();
  });
}
*/
}
