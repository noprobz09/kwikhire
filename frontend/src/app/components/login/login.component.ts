import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private flashMessageService: FlashMessageService
  ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/company';
  }

  login(form){
    
    if( form.valid ){ // if form is valid     

        //call userservice login
         this.userService.login(this.model)
        .subscribe(
            data => {         
              //redirect to specified returnUrl
              this.router.navigate([this.returnUrl]);
            },
            err => {
              this.flashMessageService.error(err.error.text);            
            }
          );

    }else{// else throw error
      this.flashMessageService.error('Some Fields are required to have input');
    }

  }

}
