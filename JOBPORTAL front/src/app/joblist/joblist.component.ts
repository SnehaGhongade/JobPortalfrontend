import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from '../services';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent {
  joblist!:any;
  JobTitle:any;
  constructor(private service:Services, private router:Router, private route:ActivatedRoute){
  }
  ngOnInit():void
{
  this.getAllData();
}
getAllData()
{
this.service.getJobListData().subscribe({
  next:(res)=>{
    this.joblist=res;
  }
})
}
Search(){
  if(this.JobTitle==""){
    this.ngOnInit();
  }else{
    this.joblist=this.joblist.filter((res: { jobTitle: string; })=>{
      return res.jobTitle.toLocaleLowerCase().match(this.JobTitle.toLocaleLowerCase());
    });
  }
}

}
