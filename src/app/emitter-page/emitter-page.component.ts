import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emitter-page',
  imports: [],
  templateUrl: './emitter-page.component.html',
  styleUrl: './emitter-page.component.css'
})
export class EmitterPageComponent {



  constructor(
    private router: Router,
  ){}

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + 'successful.');
    }).catch((error) => {
      console.error('Navigation to ' + page + 'failed: ', error);
    });
  }

}
