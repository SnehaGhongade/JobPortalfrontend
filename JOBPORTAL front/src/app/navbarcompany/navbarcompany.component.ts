import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarcompany',
  templateUrl: './navbarcompany.component.html',
  styleUrls: ['./navbarcompany.component.css']
})
export class NavbarcompanyComponent {
  constructor(private router:Router){}
  onsubmit()
  {
this.router.navigate(['/landing']);
  }
}
