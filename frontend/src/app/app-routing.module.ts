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

import { AuthGuard } from './guards/auth.guard';
import { CompanyIndexComponent } from './components/company/company-index/company-index.component';
const routes: Routes = [  
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },  
  { path: 'jobs', component: JobsComponent },
  {
    path: 'company',
    component: CompanyIndexComponent,
    canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'interview/lists', pathMatch: 'full'},
      {path: 'interview/lists', component: InterviewListsComponent},
      {path: 'interview/create', component: InterviewCreateComponent},
      { path: 'jobs/lists', component: JobListsComponent},
      { path: 'jobs/create', component: JobCreateComponent},
    ]    
  },
  
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
