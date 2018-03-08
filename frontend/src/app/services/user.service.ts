import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AppConfig } from '../config/app.config';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  create(user: User){
    return this.http.post( AppConfig.apiUrl + '/user/create', user);
  }
}
