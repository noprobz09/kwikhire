import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AppConfig } from '../config/app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { 
  }

  create(user: User){
    return this.http.post( AppConfig.apiUrl + '/user/create', user);
  }

  login(user: User){
<<<<<<< HEAD

    return this.http.post( AppConfig.apiUrl + '/user/login', user);
=======
    return this.http.post( AppConfig.apiUrl + '/user/login', user)
      .map(user => { 
        // login successful if there's a jwt token in the response
        if (user) {
            // store user details and token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(){
    //to do:
    //call server endpoint to validate the bearer token;
    //if its valid then return true; else false;
      
    //temporary return false only
    return false;
>>>>>>> 2ce024374a919d33eca11d589f5113181346a84e
  }
}
