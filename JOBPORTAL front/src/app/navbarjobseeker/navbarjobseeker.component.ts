import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarjobseeker',
  templateUrl: './navbarjobseeker.component.html',
  styleUrls: ['./navbarjobseeker.component.css']
})
export class NavbarjobseekerComponent {
  constructor(private router:Router){}
  onsubmit()
  {
this.router.navigate(['/landing']);
  }

}
