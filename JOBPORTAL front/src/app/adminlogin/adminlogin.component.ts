import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from '../services';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  loginForm!:FormGroup;
constructor(private router:Router,private service:Services,private formbuilder:FormBuilder,private http:HttpClient){}
ngOnInit():void{
  this.loginForm=this.formbuilder.group({
email:['',[Validators.required]],
password:['',[Validators.required]]
  })
}
login()
{
  this.http.get<any>("http://localhost:5189/api/Admins").subscribe({
    next:(res)=>{
      const user=res.find((a:any)=>
      {
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if(user)
      {
        alert("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['/welcomeadmin']);
        
      }
else{
        alert("Login Not Successful")
      }
  },
  error:()=>{
    alert("Something is wrong")
  }
})
}
Cancel()
{
  this.router.navigate(['/landing']);
}
}
