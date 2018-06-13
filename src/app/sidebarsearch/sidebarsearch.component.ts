import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-sidebarsearch',
  templateUrl: './sidebarsearch.component.html',
  styleUrls: ['./sidebarsearch.component.css']
})
export class SidebarsearchComponent implements OnInit {

  addinputtext: any;
  users:User[];

  @Output() addinput = new EventEmitter<any>();
  constructor( private userservice:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  onClick(searchTerm: string) {
    console.log("Adding user", searchTerm);
    this.addinputtext = null;
    this.addinput.emit(searchTerm);
  }

  getUsers() {
    console.log("inside user component");
    this.userservice.getUsers().subscribe(data => {
      this.users = data.json();
    });
  }
}
