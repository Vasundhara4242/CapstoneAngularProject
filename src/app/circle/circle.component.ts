/*
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Circle } from './circle';
import { CircleService } from './../services/circle.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  circles:object[];
  
  @Output() selectedCircle = new EventEmitter<any>();
  constructor(private circleservice:CircleService,private router : Router) { } 
  
 

  getCircles()
  {
    console.log("inside circle component");
    this.circleservice.getCircles().subscribe(data =>{
      this.circles = data.json();
  });
  }

  selectCircle(circledata:string)
  {
    console.log('circle name' , circledata);

    let currentCircleName = {
      type: 'circle', value:circledata
    }
    this.selectedCircle.emit(currentCircleName);
  }

  ngOnInit() {

    // let circle = new Circle();
    // this.circle=circle.getcircle();
    this.getTaggedCircles();
    //this.getCircles();
  }
  
  createCircle()
  {
    this.router.navigate(['/createCircle']);
  }

  getTaggedCircles() {
    
    this.circleservice.getCirclesfromusercircle().subscribe(data=>{
      this.circles=data.json();
    });
    console.log("circle name from tagged circle" +this.circles);
  }

}
*/


import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Circle} from './circle';
import {CircleService} from './../services/circle.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {


  circles: object[];
  @Output() selectedCircle = new EventEmitter<any>();
  constructor(private circleservice: CircleService) { }


  ngOnInit() {
    let circle=new Circle();
 
    this.getCircles();
  }


  getCircles(){
    console.log('In component');
    this.circleservice.getCircles().subscribe( data =>{
      //this.circles=circle.json();
      this.circles=data.json();
    });

  }

  selectCircle(circleData:any){
    console.log('circle name:'+circleData.circleName);
    const currentCircleValue={type:'circle',value:circleData};
    this.selectedCircle.emit(currentCircleValue);
  }
}
