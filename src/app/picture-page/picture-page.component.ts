import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoicImageAPIService } from '../services/stoicImageAPI.service';
import { StoicImages } from '../models/Stoic-Images.model';
import { Stoic } from '../models/Stoic.model';
import { StoicAPIService } from '../services/stoicAPI.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-picture-page',
    templateUrl: './picture-page.component.html',
    styleUrls: ['./picture-page.component.css'],
    standalone: false
})
export class PicturePageComponent implements OnInit {
  stoicImages: StoicImages[] = [];
  stoics: Stoic[] = [];


  constructor(
    private router: Router,
    private stoicImageAPIService: StoicImageAPIService,
    private stoicAPIService: StoicAPIService
  ) {}

  ngOnInit(){
    this.stoicImageAPIService.getStoicImages().subscribe((data) => {
      this.stoicImages = data;
      console.log(this.stoicImages);
    });
    this.stoicAPIService.getStoics().subscribe((data) => {
      this.stoics = data;
      console.log(this.stoics);
    })
  }

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
