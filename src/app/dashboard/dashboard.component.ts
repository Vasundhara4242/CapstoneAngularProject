import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router, private userService: UserService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }


  username:string;
  currentSelected: object;

  onSelect(data) {
    console.log(data);
    this.currentSelected = data;
    console.log('user in parent' , this.currentSelected);
  }

  signout()
   {
    let obj = new User();
    obj.username = localStorage.getItem('username');
    obj.status = "AWAY";
    /* this.userService.getUsers().subscribe(data=>{
       data.json();
     })*/

    this.userService.updateUser(obj).subscribe(
      data => {
        console.log("Status code returned is: " + data.status);
        if (data.status == 200) {
          console.log("Updated");
        }
      });
     console.log("signout");
     localStorage.removeItem('token');
     localStorage.removeItem('username');
     localStorage.clear();
     this.router.navigate(['']);

   }

   changedvalue(val) {
    console.log("Status:", val);
    let obj = new User();
    obj.username = localStorage.getItem('username');
    obj.status = val;
    /* this.userService.getUsers().subscribe(data=>{
       data.json();
     })*/

    this.userService.updateUser(obj).subscribe(
      data => {
        console.log("Status code returned is: " + data.status);
        if (data.status == 200) {
          console.log("Updated");
        }
      });
  }
 
}
