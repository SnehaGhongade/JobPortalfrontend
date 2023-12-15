import { HttpClient } from '@angular/common/http';
import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../services';
import { CompanyService } from '../company-service.service';
 
@Component({
  selector: 'app-companyjob-list',
  templateUrl: './companyjob-list.component.html',
  styleUrls: ['./companyjob-list.component.css']
})
export class CompanyjobListComponent {
  postgroup = new FormGroup({
 
    jobId: new FormControl(),
    jobTitle: new FormControl(),
    jobDescription: new FormControl(),
    jobExperienceLevel: new FormControl(),
    jobSkillSet:new FormControl(),
    jobPayScale:new FormControl(),
    jobLocation:new FormControl(),
    companyId:new FormControl(),
  });
  joblist!: any;
  JobTitle: any;
  companyId: number | undefined;
  JobData: any;
  constructor(@Inject(Services) private srvc:any,private service: Services,private companyService: CompanyService,
    public httpc: HttpClient,
    private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.fetchCompanyId();
    this.getAllData();
  }

  fetchCompanyId() {
    const companyId = this.companyService.getLoggedInCompanyId();

    if (companyId !== null && companyId !== undefined) {
      this.companyId = +companyId; 
      this.getAllData();
    }
  }

  getAllData() {
    this.service.getJobListData().subscribe({
      next: (res) => {
        this.JobData = res; 
        this.joblist = this.filteredJobData; 
      }
    });
  }

  get filteredJobData(): any[] {
    
    return this.JobData.filter((jb: { companyId: number | undefined; }) => jb.companyId === this.companyId);
  }

  Search() {
    if (this.JobTitle == "") {
      this.ngOnInit();
    } else {
      this.joblist = this.joblist.filter((res: { jobTitle: string; }) => {
        return res.jobTitle.toLocaleLowerCase().match(this.JobTitle.toLocaleLowerCase());
      });
    }
  }
 
  deletejob(jobId: any): void {
 
   
    this.httpc.delete("http://localhost:5189/api/JobPostings/" + jobId).subscribe(
      (res: any) => {
        this.joblist = this.joblist.filter((res: { jobId: any; }) => res.jobId !== jobId);
        this.getAllData();
        alert("Job Post deleted");
      },
    )
  }
 
  editData:any;
 
  editjob(event:any):void {
    console.log(event);
    this.editData = event;
    console.log(this.editData);
 
    var jobId = this.postgroup.get('jobId')?.value;
    this.srvc.getJobListData(jobId).subscribe(
      (res:any)=>{
        this.postgroup.patchValue(res);
        console.log(res);
        this.router.navigate(['updatejob'], { queryParams: { data: JSON.stringify(this.editData) } });
    },
    (err:any)=>{
        window.alert(JSON.stringify(err));
    }
    );
  }
 
}
 