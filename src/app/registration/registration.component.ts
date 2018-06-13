import { Component, OnInit } from '@angular/core';
import { User } from './../user/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  userObject:User;
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(form:NgForm)
  {
   console.log(form.value);
   this.userservice.registerUser(form).subscribe(
    data => {
      if (data.status === 201)
      {
        this.router.navigate(['']);
       
      }
  }
)
}
}