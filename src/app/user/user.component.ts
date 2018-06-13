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
  
  @Output() selectedUser = new EventEmitter<any>();
  
  constructor(private userservice:UserService) { }


  selectUser(userdata:string)
  {
    console.log('User name' , userdata);

    let currentUserName = {
      type: 'User', 
      value:userdata
    };
    this.selectedUser.emit(currentUserName);
  }
  
getUsers()
{
  console.log("inside user component");
  this.userservice.getUsers().subscribe(data =>{
      this.users = data.json();
  });
}

  // getUsers()
  // {
  //   this.users=this.userservice.getUsers();
  // }

 


  ngOnInit() {
    // let user = new User();
    // this.users = user.getuser();
    this.getUsers();
  }

}
