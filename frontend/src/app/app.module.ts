import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
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
  ],
  providers: [
    FlashMessageService,
    UserService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
