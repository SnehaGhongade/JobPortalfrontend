import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  constructor(private router:Router){}
  onsubmit()
  {
this.router.navigate(['/landing']);
  }

}
