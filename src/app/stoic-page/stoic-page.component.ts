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
  stoicCategory: string;
  selectedStoic: Stoic[] = [];
  selectedCategory: Stoic[] = [];
  byRadio: boolean = false;
  byCategory: boolean = false;
  numPerColumns: number = 1;


  constructor(
    private router: Router,
    private stoicService: StoicAPIService
  ){}

  ngOnInit(){
    // this.stoicService.getStoics().subscribe((data) => {
    //   this.stoics = data;
    //   console.log(this.stoics);
    // })

  }

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + ' successful');
    }).catch((error) => {
      console.error('Navigation to ' + page + ' failed:', error);
    });
  }

  getStoicbyName(name: string){
    this.stoicService.getStoicsByName(name).subscribe((data) => {
      this.selectedStoic = data;
      console.log(this.selectedStoic);
      this.byRadio = true;
    });
  }

  getStoicbyCategory(category: string){
    this.stoicService.getStoicsByCategory(category).subscribe((data) => {
      this.selectedCategory =  data;
      this.chunkingArray(this.selectedCategory);
      this.byCategory = true;
      console.log(this.selectedCategory);
    })
  }

  chunkingArray(columnArray: Stoic[]) {
        console.log(columnArray);
        const chunkedArray = [];
        for (let i = 0; i < columnArray.length; i += this.numPerColumns) {
          const chunk = columnArray.slice(i, i + this.numPerColumns);
          chunkedArray.push(chunk);  
        }
          columnArray = chunkedArray;
      }

}
