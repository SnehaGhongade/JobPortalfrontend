import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from '../services';
import { CompanyService } from '../company-service.service';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent {
  loginForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private service: Services,
    private formbuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      companyEmail: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  
  login() {
    const { companyEmail, password } = this.loginForm.value;
  
    this.http.get<any>('http://localhost:5189/api/Companies').subscribe({
      next: (companies) => {
        const user = companies.find((company: any) => {
          return company.companyEmail === companyEmail && company.password === password;
        });
  
        if (user) {
          this.companyService.setLoggedInCompany(user);
          console.log('Logged-in Company:', user); // Add this line for debugging
          alert('Login Successful');
          this.loginForm.reset();
          this.router.navigate(['/welcomecompany']);
        } else {
          alert('Login Not Successful');
        }
      },
      error: () => {
        alert('Something is wrong');
      }
    });
  }
  
  

  cancel() {
    this.router.navigate(['/landing']);
  }
}


 


