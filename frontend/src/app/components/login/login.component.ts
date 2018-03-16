import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FlashMessageService } from '../../services/flash-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private userService: UserService,
    private flashMessageService: FlashMessageService
  ) { }

  ngOnInit() {
  }

  login(form){
    
    if( form.valid ){ // if form is valid     

        //call userservice login
         this.userService.login(this.model)
        .subscribe(
            data => {         
              //this.flashMessageService.success('Registration successful');
              console.log(data);
              localStorage.setItem('currentUser', JSON.stringify(data));

              console.log(localStorage);
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
