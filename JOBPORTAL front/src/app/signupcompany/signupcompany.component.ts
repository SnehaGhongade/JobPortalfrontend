import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Companydetails } from '../companydetails';
import { Services } from '../services';

@Component({
  selector: 'app-signupcompany',
  templateUrl: './signupcompany.component.html',
  styleUrls: ['./signupcompany.component.css']
})
export class SignupcompanyComponent {
  signUpForm!:FormGroup;
constructor(private  http:HttpClient,private  service:Services,private formBuilder:FormBuilder,private router:Router){}
companyDetails:Companydetails  =new Companydetails ();
ngOnInit():void{
  this.signUpForm=this.formBuilder.group({
    // companyld:[''],
    companyName:['',[Validators.required]],
    companyEmail:['',[Validators.required]],
    companyPhone:['',[Validators.required]],
    companyAddress:['',[Validators.required]],
    companyDescription:['',[Validators.required]],
    password:['',[Validators.required]],
  })
}
signUp()
{
  this.http.post("http://localhost:5189/api/Companies",this.signUpForm.value).subscribe({
      next:(res)=>{
        alert("Registered Successful");
        this.router.navigate(['/companylogin']);

        let ref=document.getElementById('cancel')
    ref?.click();
    this.signUpForm.reset();
    },
    error:()=>{
      alert("Something is wrong")
    }
  })
    }
    onSubmit()
    {
      this.router.navigate(['/companylogin']);
    }
    
}
