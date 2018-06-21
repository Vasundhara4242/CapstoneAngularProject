import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { UserService } from './services/user.service';
import { CircleService } from './services/circle.service';
import { MessageService } from './services/message.service';

import { HttpModule }  from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCircleComponent } from './create-circle/create-circle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarsearchComponent } from './sidebarsearch/sidebarsearch.component';
import { UserCircleService } from './services/usercircle.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CircleComponent,
    MessageComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    CreateCircleComponent,
    SidebarComponent,
    SidebarsearchComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component:LoginComponent },
      { path: 'register', component:RegistrationComponent },
      { path: 'dashboard', component:(localStorage.getItem('token') === null) ? LoginComponent:DashboardComponent },
      // { path: 'dashboard', component:DashboardComponent }
  /*    {
        path: 'createCircle',
        component : CreateCircleComponent
      } */
    ]),

    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService,CircleService,MessageService,UserCircleService],
//providers: [UserService,CircleService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
