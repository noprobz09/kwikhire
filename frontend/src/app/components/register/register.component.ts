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
     
      if(this.model.password !== this.model.confirmpassword ){

        this.flashMessageService.error('Password and Confirm Password not match!');

      }else{

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

      }

    }else{// else throw error
      this.flashMessageService.success('Some Fields are required to have input');
    }
    
    
  }

}
