import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginForm(form: NgForm) {
    console.log(form.value);
    this.userservice.authenticateuser(form).subscribe(
      data => {
        if (data.status === 200) {
          console.log("inside navigate to dashboard");
         this.router.navigate(['/dashboard']);
        //  this.router.navigate(['http://localhost:4200']);

          location.reload();
          localStorage.setItem('token', data.json().token);
          localStorage.setItem('username', form.value.username);
          let obj = new User();
          obj.username = localStorage.getItem('username');
          obj.status = "ACTIVE";

          console.log("Changing status" + obj.username);
          this.userservice.updateUser(obj).subscribe(
            data => {
              console.log("Status code returned is: " + data.status);
              if (data.status == 200) {
                console.log("Updated");
              }
            });
        }
      }
    )


  }
}
