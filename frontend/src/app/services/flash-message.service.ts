import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlashMessageService {

  private subject = new Subject<any>();

  constructor(
    private router: Router
  ) { }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }

  success(message: string){
    //console.log(message);
    this.subject.next({type: 'success', text: message});
  }

  error(message: string){
    this.subject.next({type: 'error', text: message});
  }

}
