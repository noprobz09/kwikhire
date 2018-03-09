import { Component, OnInit } from '@angular/core';
import { JobService } from './../../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any;
  
  constructor(public jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobs => {
      // this.jobService.jobBS.next(jobs);
      // this.jobs = this.jobService.jobBS;
      // console.log(this.jobs);
    });
  }

}
