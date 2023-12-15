

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../services';
import { AuthService } from '../auth.service';
import { ApplicationStatusService } from '../application-status.service';

@Component({
  selector: 'app-applyforjob',
  templateUrl: './applyforjob.component.html',
  styleUrls: ['./applyforjob.component.css']
})
export class ApplyforjobComponent implements OnInit {
  JobGroup: FormGroup;
  selectedFile: File | null = null;
  fileName: any;
  jobId: number | undefined;
  companyId: number | undefined;

  constructor(
    private service: Services,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private srvc: Services, 
    private applicationStatusService: ApplicationStatusService
  ) {
    this.JobGroup = this.formBuilder.group({
      jobSeekerId: [this.authService.currentUserValue.jobSeekerId, Validators.required],
      jobId: ["", Validators.required],
      resume: ["", Validators.required],
      companyId: ["", Validators.required], 
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jobId = +params['jobId'];
      this.JobGroup.get('jobId')?.setValue(this.jobId);
      this.companyId = +params['companyId'];
      this.JobGroup.get('companyId')?.setValue(this.companyId); 
    });
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      const fullPath = this.selectedFile.name;
      const startIndex = fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/');
      this.fileName = fullPath.substring(startIndex);
      console.log(this.fileName);
    }
  }

  postData(): void {
    const jobIdNumber: number = +this.JobGroup.value.jobId;

    this.applicationStatusService.updateStatus(jobIdNumber);

    const JobData = {
      jobSeekerId: this.JobGroup.value.jobSeekerId,
      jobId: jobIdNumber,
      resume: this.fileName,
      companyId: this.companyId, 
    };

    console.log(JobData);

    this.srvc.postData(JobData).subscribe(
      (res: any) => {
        alert('Data Successfully Added!');
        this.JobGroup.reset();
        this.router.navigateByUrl("jobopenings");
      },
      (err: any) => {
        alert(JSON.stringify(err));
      }
    );
  }

  onSubmit() {
    this.router.navigate(['/welcomejobseeker']);
  }
}

