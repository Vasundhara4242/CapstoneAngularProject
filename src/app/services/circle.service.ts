
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class CircleService {
    constructor(private http: Http) { }
    private CIRCLE_SERVICE_BASE_URL = 'http://localhost:8084/api/circle/';

    private USER_CIRCLE_SERVICE_BASE_URL = "http://localhost:8085/api/";
    private ServerWithApiUrl;
    headerObj = new Headers({
        "Authorization" : 'Bearer '+ localStorage.getItem('token') 
    });

    getCircles()
    {
        console.log("inside circle service");
        return this.http.get(this.CIRCLE_SERVICE_BASE_URL, {headers:this.headerObj});
    }

    // getCircles():any{
    //     let obj = new Circle();

    //     return obj.getcircle();
    // }

    createCircle(circle: any) {
        console.log("In Circle service for Creating new circle");
        return this.http.post(this.CIRCLE_SERVICE_BASE_URL, circle, { headers: this.headerObj });
      }
    
      getCirclesfromusercircle() {
        this.ServerWithApiUrl = this.USER_CIRCLE_SERVICE_BASE_URL + 'usercircle/';
        console.log("In service");
        return this.http.get(this.ServerWithApiUrl + 'searchByUser/' + localStorage.getItem('username'), { headers: this.headerObj });
      }

}