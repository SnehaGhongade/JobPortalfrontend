import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Services } from '../services';


@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent {
  companyData!:any;
  companyName:any;
  companyId:any;
  getCompanyDetailsData: any;
  constructor(private services:Services, private router:Router, private route:ActivatedRoute){
  }
  ngOnInit():void
{
  this.getAllData();
}
getAllData()
{
this.services.getCompanyDetailsData().subscribe({
  next:(res)=>{
    this.companyData=res;
  }
})
}
Search(){
  if(this.companyName==""){
    this.ngOnInit();
  }else{
    this.companyData=this.companyData.filter((res: { companyName: string; })=>{
      return res.companyName?.toLocaleLowerCase().match(this.companyName?.toLocaleLowerCase());
    });
  }
}


}



