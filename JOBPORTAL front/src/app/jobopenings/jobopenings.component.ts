import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from '../services';
import { ApplicationStatusService } from '../application-status.service';

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styleUrls: ['./jobopenings.component.css']
})
export class JobopeningsComponent {
  joblist!:any;
  JobTitle:any;
  // applicationStatus: string | undefined;
  // appliedJobId: number | null | undefined;
  appliedJobIds: number[] = [];
  
  constructor(private service:Services, private router:Router, private route:ActivatedRoute, private applicationStatusService: ApplicationStatusService,){
  }



ngOnInit(): void {
  this.applicationStatusService.appliedJobIds$.subscribe(appliedJobIds => {
    this.appliedJobIds = appliedJobIds;
    this.getAllData();
  });
}


getAllData() {
  this.service.getJobListData().subscribe({
    next: (res) => {
      this.joblist = res.map((job: any) => ({
        ...job,
        isApplied: this.appliedJobIds.includes(job.jobId)
      }));
    }
  });
}


Search(){
  if(this.JobTitle==""){
    this.ngOnInit();
  }else{
    this.joblist=this.joblist.filter((res: { jobTitle: string; })=>{
      return res.jobTitle.toLocaleLowerCase().match(this.JobTitle.toLocaleLowerCase());
    });
  }
}
updateAppliedStatus(jobId: number) {
  const updatedJobList = this.joblist.map((job: any) => {
    if (job.jobId === jobId) {
      return { ...job, isApplied: true };
    }
    return job;
  });
  this.joblist = updatedJobList;
}
navigateToApplyForJob(jobId: number, companyId: number) {
  this.router.navigate(['/applyforjob', jobId, companyId]);
}


}
