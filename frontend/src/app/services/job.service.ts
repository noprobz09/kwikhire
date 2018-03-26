import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app.config';

//import 'rsjx/add/operator/map';
import { Http, Headers, RequestOptions, Response, HttpModule } from '@angular/http';

@Injectable()
export class JobService {
  currentUser: any;

  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  getJobs() {
    console.log(this.currentUser._id);
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.currentUser._id });
    let options = new RequestOptions({ headers: headers });
    console.log(options);
    console.log(AppConfig.apiUrl + '/jobs');
      return this.http.get( AppConfig.apiUrl + '/jobs', options);
  }
}
