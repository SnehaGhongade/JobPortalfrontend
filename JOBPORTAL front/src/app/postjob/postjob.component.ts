import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Joblist } from '../joblist';
import { Services } from '../services';
// import { CompanyService } from '../company.service'; // Import the CompanyService
import { CompanyService } from '../company-service.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  formValue!: FormGroup;
  jobModel: Joblist = new Joblist();

  constructor(
    private service: Services,
    private formBuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService 
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      jobId: ['',[Validators.required]],
      jobTitle: ['',[Validators.required]],
      jobDescription: ['',[Validators.required]],
      jobExperienceLevel: ['',[Validators.required]],
      jobSkillSet: ['',[Validators.required]],
      jobPayScale: ['',[Validators.required]],
      jobLocation: ['',[Validators.required]],
      // startDate: ['',[Validators.required]],
      // endDate: ['',[Validators.required]],
      companyId: ['',[Validators.required]]
    });

    // Fetch the logged-in company details
    const loggedInCompany = this.companyService.getLoggedInCompany();

    // Set the companyId in the form
    this.formValue.patchValue({
      companyId: loggedInCompany.companyId
    });
  }

  postJob() {
    this.jobModel.jobId = this.formValue.value.jobId;
    this.jobModel.jobTitle = this.formValue.value.jobTitle;
    this.jobModel.jobDescription = this.formValue.value.jobDescription;
    this.jobModel.jobExperienceLevel = this.formValue.value.jobExperienceLevel;
    this.jobModel.jobSkillSet = this.formValue.value.jobSkillSet;
    this.jobModel.jobPayScale = this.formValue.value.jobPayScale;
    this.jobModel.jobLocation = this.formValue.value.jobLocation;
    // this.jobModel.startDate = this.formValue.value.startDate;
    // this.jobModel.endDate = this.formValue.value.endDate;
    this.jobModel.companyId = this.formValue.value.companyId;

    this.service.postJob(this.jobModel).subscribe({
      next: (res) => {
        console.log(res);
        alert("Job Posted Successfully");
        this.router.navigate(['/welcomecompany']);
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
      },
      error: () => {
        alert("Not Assigned the value");
      }
    });
  }

  onSubmit() {
    this.router.navigate(['/welcomecompany']);
  }
}

