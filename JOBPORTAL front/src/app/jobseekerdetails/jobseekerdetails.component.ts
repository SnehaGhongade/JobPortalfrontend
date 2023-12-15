import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from '../services';

@Component({
  selector: 'app-jobseekerdetails',
  templateUrl: './jobseekerdetails.component.html',
  styleUrls: ['./jobseekerdetails.component.css']
})
export class JobseekerdetailsComponent {
  JobData!:any;//1
skills:any;
constructor(private adminservice:Services, private router:Router, private route:ActivatedRoute){
}
ngOnInit():void
{
  this.getAllData();//2
}

getAllData()//3
{
this.adminservice.getJobSeekerData().subscribe({
  next:(res)=>{
    this.JobData=res;
  }
})
}

Search(){
  if(this.skills==""){
    this.ngOnInit();
  }else{
    this.JobData=this.JobData.filter((res: { skills: string; })=>{
      return res.skills.toLocaleLowerCase().match(this.skills.toLocaleLowerCase());
    });
  }
}

}
