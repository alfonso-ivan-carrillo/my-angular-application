import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent {

  constructor(
    private router: Router,
  ){}

  routeToPage(page: string){
    this.router.navigate([page]).then(() =>{ 
      console.log('Navigation to ' + page + ' successful');
    }).catch(error =>{ 
      console.error('Navigation to ' + page + ' failed:', error);
    });
  }
}
