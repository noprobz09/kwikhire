import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import components
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';

import { JobsComponent } from './components/jobs/jobs.component';
import { InterviewListsComponent } from './components/company/interview-lists/interview-lists.component';
import { InterviewCreateComponent } from './components/company/interview-create/interview-create.component';
import { JobListsComponent } from './components/company/job-lists/job-lists.component';
import { JobCreateComponent } from './components/company/job-create/job-create.component';

const routes: Routes = [  
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },  
  { path: 'jobs', component: JobsComponent },
  { path: 'company/interview/lists', component: InterviewListsComponent},
  { path: 'company/interview/create', component: InterviewCreateComponent},
  { path: 'company/jobs/lists', component: JobListsComponent},
  { path: 'company/jobs/create', component: JobCreateComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule 
  ],
  declarations: []
})
export class AppRoutingModule { }
