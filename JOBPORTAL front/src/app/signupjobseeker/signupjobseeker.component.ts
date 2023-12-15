import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobseekerdetails } from '../jobseekerdetails';
import { Services } from '../services';

@Component({
  selector: 'app-signupjobseeker',
  templateUrl: './signupjobseeker.component.html',
  styleUrls: ['./signupjobseeker.component.css']
})
export class SignupjobseekerComponent {
  signUpForm!:FormGroup;
constructor(private  http:HttpClient,private  service:Services,private formBuilder:FormBuilder,private router:Router){}
jobSeeker:Jobseekerdetails =new Jobseekerdetails();
ngOnInit():void{
  this.signUpForm=this.formBuilder.group({

    jobSeekerName:['',[Validators.required]],
    gender:['',[Validators.required]],
    email:['',[Validators.required]],
    mobileNumber:['',[Validators.required]],
    skills:['',[Validators.required]],
    password:['',[Validators.required]],
  })
}

postJobSeeker(){
  this.jobSeeker.jobSeekerName=this.signUpForm.value.jobSeekerName;
  this.jobSeeker.gender=this.signUpForm.value.gender;
  this.jobSeeker.email=this.signUpForm.value.email;
  this.jobSeeker.mobileNumber=this.signUpForm.value.mobileNumber;
  this.jobSeeker.skills=this.signUpForm.value.skills;
  this.jobSeeker.password=this.signUpForm.value.password;
  
    this.service.postJobSeeker(this.jobSeeker).subscribe({
  next:(res)=>{
    console.log(res);
    alert("Registered Successfully");
    this.router.navigate(['/jobseekerlogin']);
    let ref=document.getElementById('cancel')
    ref?.click();
    this.signUpForm.reset();
  },
  error:()=>{
    alert("Not Assigned the value");
  }
    })
  }
  onSubmit()
  {
    this.router.navigate(['/jobseekerlogin']);
  }
  
}
