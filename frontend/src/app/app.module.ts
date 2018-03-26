import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FlashMessageComponent } from './components/flash-message/flash-message.component';
//import { TextEqualityValidatorModule } from "ngx-text-equality-validator";

import { FlashMessageService } from './services/flash-message.service';
import { UserService } from './services/user.service';

import { EqualTextValidator } from './directives/equal.validator';

import { JobService } from './services/job.service';
import { JobsComponent } from './components/jobs/jobs.component';
import { InterviewListsComponent } from './components/company/interview-lists/interview-lists.component';
import { InterviewCreateComponent } from './components/company/interview-create/interview-create.component';
import { JobListsComponent } from './components/company/job-lists/job-lists.component';
import { JobCreateComponent } from './components/company/job-create/job-create.component';
import { AuthGuard } from './guards/auth.guard';
import { CompanyIndexComponent } from './components/company/company-index/company-index.component';
import { SideNavbarComponent } from './components/company/side-navbar/side-navbar.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule, 
    MDBBootstrapModule.forRoot()   
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    FlashMessageComponent,
    EqualTextValidator,
    JobsComponent,
    InterviewListsComponent,
    InterviewCreateComponent,
    JobListsComponent,
    JobCreateComponent,
    CompanyIndexComponent,
    SideNavbarComponent,
  ],
  providers: [
    FlashMessageService,
    UserService,
    JobService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
