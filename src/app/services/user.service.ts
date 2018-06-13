import { User } from './../user/user';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class UserService {
    constructor(private http: Http) { }
    private USER_SERVICE_BASE_URL = 'http://localhost:8082/api/user';

    private CREATEUSER = 'http://localhost:8082/user/';
    private AUTHENTICATE = 'http://localhost:8082/login/';

    headerObj = new Headers({
        "Authorization" : 'Bearer '+ localStorage.getItem('token') 
    });
    getUsers()
    {
        console.log("inside user service");
        return this.http.get(this.USER_SERVICE_BASE_URL,{headers:this.headerObj});
    }


    registerUser(form)
    {
        console.log(form.value);
        return this.http.post(this.CREATEUSER,form.value);
    }

    authenticateuser(form)
    {
        return this.http.post(this.AUTHENTICATE,form.value);
    }

    updateUser(user: User) {
        let headers1 = new Headers(
            {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            });
        console.log("In User service for Updating the status");
        return this.http.put(this.USER_SERVICE_BASE_URL + "/" + user.username, user, { headers: headers1 });
    }
    getStatus(username: String) {
        console.log("In User service :Called Get user Status");
        return this.http.get(this.USER_SERVICE_BASE_URL + "/" + username + "/"+"status", { headers: this.headerObj });
    }

}
