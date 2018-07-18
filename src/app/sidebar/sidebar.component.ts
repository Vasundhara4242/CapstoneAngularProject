import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserCircleService } from '../services/usercircle.service';
import { SIDEBAR } from "../sidebar/sidebar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit, OnChanges {
  @Input() sidebarObj: object;
  addselected: string;
  usercircle: object[];
  circlenamec: string;
  sideb: SIDEBAR;
  status:string;
  temp:string;
  constructor(private usercircleservice: UserCircleService) { }

  ngOnInit() {
    // this.usercircle=[{username:"a"},{username:"b"}];

  }
  ngOnChanges(value) {
    // this.temp=value.sidebarObj.currentValue.value;
    console.log("Object in sidebar is:", value.sidebarObj.currentValue.value);
    //this.usercircle=this.usercircleservice.getusers(value.sidebarObj.currentValue.value);
    this.usercircleservice.getusers(value.sidebarObj.currentValue.value).subscribe(data => {
      this.usercircle = data.json();
      console.log("value onchange:", this.usercircle);
    });
    this.circlenamec = value.sidebarObj.currentValue.value;

this.usercircleservice.getstatus(value.sidebarObj.currentValue.value).subscribe(data => {
  this.usercircle = data.json();
  console.log("value changed:", this.status);
});
this.status=value.sidebarObj.currentValue.value;

  }
  onClicked(value: string) {
    console.log("Called on click:",value);
    this.addselected = value;
    console.log("Added Data in parent", this.addselected);
    this.sideb = new SIDEBAR();
    this.sideb.circlename = this.circlenamec;
    this.sideb.username = this.addselected;
    this.sideb.status = this.addselected;
    console.log("value:", this.sideb);
    console.log("circle name:", this.sideb);
    this.usercircleservice.putusers(this.sideb).subscribe(
      data => {
        console.log("status",data.status);
        if (data.status == 200) {
          this.usercircleservice.getusers(this.sideb.circlename).subscribe(data => {
            this.usercircle = data.json();
            console.log("value onchange:", this.usercircle);
          });
          console.log("Added value:", this.usercircle);
        }
      }
    )

  }
}
