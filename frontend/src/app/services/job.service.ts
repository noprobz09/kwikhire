import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app.config';
import { Http , HttpModule} from '@angular/http';
//import 'rsjx/add/operator/map';

@Injectable()
export class JobService {

  constructor(private http: HttpClient) { }

 // public jobBS = new BehaviorSubject<string>(null);

  getJobs() {
    console.log(AppConfig.apiUrl + '/jobs');
      return this.http.get( AppConfig.apiUrl + '/jobs');
  }
}
