import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.css']
}) 
export class InterviewCreateComponent implements OnInit {

  formData:any;
  model: any = {};
  step: number = 1;
  
  constructor() { }

  ngOnInit() {
  }

  submit(f){

    if(f.valid){
      if(this.step < 3){
        this.step += 1;
        this.goNextForm(this.step);
        
      }else{
        //interview service save here

      }
    }
  }

  goNextForm(step: number){}

  goPrevForm(){

  }

}
