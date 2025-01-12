import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
  ) { } 

  ngOnInit() {
    console.log("Homepage Component Loaded");
    this.evaluateInput("hello");
    this.evaluateInput(".hello.")
  }

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + ' successful');
    }).catch(error => {
      console.error('Navigation failed:', error);
    });
  }

  evaluateInput(input: string){
    const regExp = /^[a-zA-Z0-9]+$/; 
    let valid: boolean = false;
    console.log(regExp.test(input)); 
    
  }

}
