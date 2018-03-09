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
    
    //console.log(this.model);

    // this.userService.create(this.model)
    //     .subscribe(
    //       data => {         
    //         this.flashMessageService.success('Registration successful');
    //       },
    //       err => {
    //         this.flashMessageService.error(err.error.text);            
    //       }
    //     );

    console.log(form);
    console.log(form.valid);
    
  }

}
