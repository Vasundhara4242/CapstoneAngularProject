import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CircleService} from '../services/circle.service';

import {Router} from '@angular/router';
import { circle } from '../circle/circle';
@Component({
  selector: 'app-create-circle',
  templateUrl: './create-circle.component.html',
  styleUrls: ['./create-circle.component.css']
})
export class CreateCircleComponent implements OnInit {

  constructor(private circleService:CircleService,private router:Router) { }
  circleObj:circle
  createCircle(form:any)
 {
      console.log("Circle  Object from "+form.value);
      this.circleObj= new circle();
      this.circleObj.circleName=form.value.circle;
      this.circleObj.creatorId=localStorage.getItem("username");
      console.log("Circle object created"+this.circleObj);
      this.circleService.createCircle(this.circleObj).subscribe(
        data=>
        {
          if(data.status==201)
          {
            
           
           this.router.navigate(['/dashboard']);
          }
        }
      )

}
  ngOnInit() {
  }

}
