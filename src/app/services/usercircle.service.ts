import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SIDEBAR } from '../sidebar/sidebar';

@Injectable()
export class UserCircleService {

    private USERCIRCLE_SERVICE_BASE_URL = "http://localhost:8085/api/";
    private ApiUrl;
    private GETUSERCIRCLEDATA;
    private ServerWithApiUrl;
    headerObj = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    constructor(private http: Http) {
    }

    getusers(circlename: string) {
        this.ApiUrl = 'usercircle/';
        this.GETUSERCIRCLEDATA = this.USERCIRCLE_SERVICE_BASE_URL + this.ApiUrl;
        console.log("In service get user");
        console.log("header", this.headerObj);
        return this.http.get(this.GETUSERCIRCLEDATA + 'searchByCircle/' + circlename + '/', { headers: this.headerObj });
    }

    putusers(usercircle: SIDEBAR) {
        this.ApiUrl = 'usercircle/';
        this.ServerWithApiUrl =
            this.USERCIRCLE_SERVICE_BASE_URL + this.ApiUrl;
        console.log("In service");
        return this.http.put(this.ServerWithApiUrl + 'addToCircle/' + usercircle.username + '/' + usercircle.circlename,usercircle, { headers: this.headerObj });
    }
}