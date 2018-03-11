import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService } from '../../services/user.service';
import { FlashMessageService } from '../../services/flash-message.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private flashMessageService: FlashMessageService
  ) { }

  ngOnInit() {
  }

  register(form){
    
  
    if( form.valid ){ // if form is valid     

      console.log('valid');

        //call userservice create
         this.userService.create(this.model)
        .subscribe(
            data => {         
              this.flashMessageService.success('Registration successful');
            },
            err => {
              this.flashMessageService.error(err.error.text);            
            }
          );

    }else{// else throw error
      console.log('invalid');
      this.flashMessageService.error('Some Fields are required to have input');
    }
    
    
  }

}
