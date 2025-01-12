import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css'],
})
export class PicturePageComponent {
  constructor(private router: Router) {}

  routeToPage(page: string) {
    this.router
      .navigate([page])
      .then(() => {
        console.log('Navigation to ' + page + ' successful');
      })
      .catch((error) => {
        console.error('Navigation to ' + page + ' failed:', error);
      });
  }
}
