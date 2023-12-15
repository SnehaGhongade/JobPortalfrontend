import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { WelcomecompanyComponent } from './welcomecompany/welcomecompany.component';
import { WelcomejobseekerComponent } from './welcomejobseeker/welcomejobseeker.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { NavbarcompanyComponent } from './navbarcompany/navbarcompany.component';
import { NavbarjobseekerComponent } from './navbarjobseeker/navbarjobseeker.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { JobseekerloginComponent } from './jobseekerlogin/jobseekerlogin.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { JobseekerdetailsComponent } from './jobseekerdetails/jobseekerdetails.component';
import { JoblistComponent } from './joblist/joblist.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupcompanyComponent } from './signupcompany/signupcompany.component';
import { SignupjobseekerComponent } from './signupjobseeker/signupjobseeker.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { JobopeningsComponent } from './jobopenings/jobopenings.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { InterviewComponent } from './interview/interview.component';
import { CompanyjobListComponent } from './companyjob-list/companyjob-list.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeadminComponent,
    WelcomecompanyComponent,
    WelcomejobseekerComponent,
    NavbaradminComponent,
    NavbarcompanyComponent,
    NavbarjobseekerComponent,
    LandingComponent,
    CompanyloginComponent,
    AdminloginComponent,
    JobseekerloginComponent,
    CompanydetailsComponent,
    JobseekerdetailsComponent,
    JoblistComponent,
    SignupcompanyComponent,
    SignupjobseekerComponent,
    PostjobComponent,
    ApplyforjobComponent,
    JobopeningsComponent,
    CandidatelistComponent,
    ApplicantListComponent,
    InterviewComponent,
    CompanyjobListComponent,
    UpdatejobComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
