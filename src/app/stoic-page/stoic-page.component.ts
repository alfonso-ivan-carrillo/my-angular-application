import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stoic } from '../models/Stoic.model';
import { StoicAPIService } from '../services/stoicAPI.service';

@Component({
    selector: 'app-stoic-page',
    templateUrl: './stoic-page.component.html',
    styleUrls: ['./stoic-page.component.css'],
    standalone: false
})
export class StoicPageComponent implements OnInit {
  stoics: Stoic[] = [];
  stoicOption: string;
  selectedStoic: Stoic[] = [];

  constructor(
    private router: Router,
    private stoicService: StoicAPIService
  ){}

  ngOnInit(){
    this.stoicService.getStoics().subscribe((data) => {
      this.stoics = data;
      console.log(this.stoics);
    })
  }

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + ' successful');
    }).catch((error) => {
      console.error('Navigation to ' + page + ' failed:', error);
    });
  }

  getStoicbyName(name: string){
    console.log(name)
    this.stoicService.getStoicsByName(name).subscribe((data) => {
      this.selectedStoic = data;
      console.log(this.selectedStoic)
    })
  }

}
