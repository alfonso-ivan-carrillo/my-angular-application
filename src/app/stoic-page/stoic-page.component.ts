import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stoic-page',
  templateUrl: './stoic-page.component.html',
  styleUrls: ['./stoic-page.component.css']
})
export class StoicPageComponent {

  constructor(
    private router: Router,
  ){}

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + ' successful');
    }).catch((error) => {
      console.error('Navigation to ' + page + ' failed:', error);
    });
  }

}
