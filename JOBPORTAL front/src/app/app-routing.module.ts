import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobopeningsComponent } from './jobopenings/jobopenings.component';
import { JobseekerdetailsComponent } from './jobseekerdetails/jobseekerdetails.component';
import { JobseekerloginComponent } from './jobseekerlogin/jobseekerlogin.component';
import { LandingComponent } from './landing/landing.component';
import { PostjobComponent } from './postjob/postjob.component';
import { SignupcompanyComponent } from './signupcompany/signupcompany.component';
import { SignupjobseekerComponent } from './signupjobseeker/signupjobseeker.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { WelcomecompanyComponent } from './welcomecompany/welcomecompany.component';
import { WelcomejobseekerComponent } from './welcomejobseeker/welcomejobseeker.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { InterviewComponent } from './interview/interview.component';
import { CompanyjobListComponent } from './companyjob-list/companyjob-list.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';



const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'welcomeadmin',component:WelcomeadminComponent},
  {path:'welcomecompany',component:WelcomecompanyComponent},
  {path:'welcomejobseeker',component:WelcomejobseekerComponent},
  {path:'companydetails',component:CompanydetailsComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'companylogin',component:CompanyloginComponent},
  {path:'jobseekerlogin',component:JobseekerloginComponent},
  {path:'joblist',component:JoblistComponent},
  {path:'jobseekerdetails',component:JobseekerdetailsComponent},
  {path:'companydetails',component:CompanydetailsComponent},
  {path:'signupjobseeker',component:SignupjobseekerComponent},
  {path:'signupcompany',component:SignupcompanyComponent},
  {path:'postjob',component:PostjobComponent},
  {path:'applyforjob',component:ApplyforjobComponent},
  { path: 'applyforjob/:jobId', component: ApplyforjobComponent },
  {path:'jobopenings',component:JobopeningsComponent},
  {path:'candidatelist',component:CandidatelistComponent},
  {path:'applicant_list',component:ApplicantListComponent},
  { path: 'interview/:jobSeekerId', component: InterviewComponent },
  { path: 'welcomecompany/:companyId', component: WelcomecompanyComponent },
  {path:'companyjob-list',component:CompanyjobListComponent},
  {path:'updatejob',component:UpdatejobComponent},
  { path: 'interview/:jobSeekerId', component: InterviewComponent },

  { path: 'applyforjob/:jobId/:companyId', component : ApplyforjobComponent},
  { path: 'applyforjob/:jobId/:companyId/:companyName', component: ApplyforjobComponent},
  // { path: 'interview/:jobSeekerId/:jobId', component: InterviewComponent },
  { path: 'interview/:jobSeekerId/:jobId', component: InterviewComponent },
  
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'**',redirectTo:'landing',pathMatch:'full'},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
