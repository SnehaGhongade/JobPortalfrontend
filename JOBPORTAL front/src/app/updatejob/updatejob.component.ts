import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 
 
@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent {
  formValue = new FormGroup({
 
    jobId: new FormControl(),
    jobTitle: new FormControl(),
    jobDescription: new FormControl(),
    jobExperienceLevel: new FormControl(),
    jobSkillSet:new FormControl(),
    jobPayScale:new FormControl(),
    jobLocation:new FormControl(),
    companyId:new FormControl(),
  });
 
  constructor(private route: ActivatedRoute,    
    public httpc: HttpClient,
    @Inject(HttpClient) private client: any, private router: Router, @Inject(Router) private rt: any) { }
 
  Data: any;
 
  ngOnInit() {
 
    this.route.queryParams.subscribe(params => {
      this.Data = JSON.parse(params['data']);
      console.log(this.Data);
      console.log(this.Data.jobId);
 
    });
  }
 
 
updatejob(): void {
  const jobId = this.formValue.get('jobId')?.value;

  // Specify headers if needed (e.g., for CORS)
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  this.httpc.patch(`http://localhost:5189/api/JobPostings/${jobId}`, this.formValue.value, { headers }).subscribe(
    (res: any) => {
      alert("Post Successfully updated!");
      this.formValue.reset();
      this.rt.navigateByUrl("/companyjob-list");
    },
    (err: any) => {
      window.alert(JSON.stringify(err));
    }
  );
}
}