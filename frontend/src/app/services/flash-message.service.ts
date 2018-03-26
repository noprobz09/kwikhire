import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlashMessageService {

  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(
    private router: Router
  ) { 
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = false;
          } else {
              // clear alert
              this.subject.next();
          }
      }
    });
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }

  success(message: string, keepAfterNavigationChange = false){
    this.subject.next({type: 'success', text: message});
  }

  error(message: string, keepAfterNavigationChange = false){
    this.subject.next({type: 'error', text: message});
  }

}
