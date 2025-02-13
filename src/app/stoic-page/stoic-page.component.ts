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

  stoicsArray: Stoic [] = [];


  constructor(
    private router: Router,
    private stoicService: StoicAPIService
  ){}

  ngOnInit(){
    // this.stoicService.getStoics().subscribe((data) => {
    //   this.stoics = data;
    //   console.log(this.stoics);
    // })
    this.stoicService.getStoics().subscribe((data) => {
      this.stoicsArray = data;
      this.chunkingArray(this.stoicsArray, 2);
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
    this.stoicService.getStoicsByName(name).subscribe((data) => {
      this.selectedStoic = data;
      console.log(this.selectedStoic);
      this.byRadio = true;
    });
  }

  getStoicbyCategory(category: string){
    this.stoicService.getStoicsByCategory(category).subscribe((data) => {
      this.selectedCategory =  data;
      this.chunkingArray(this.selectedCategory, this.numPerColumns);
      this.byCategory = true;
      console.log(this.selectedCategory);
    })
  }

  chunkingArray(columnArray: Stoic[], numPerColumns: number) {
        console.log(columnArray);
        const chunkedArray = [];
        for (let i = 0; i < columnArray.length; i += numPerColumns) {
          const chunk = columnArray.slice(i, i + numPerColumns);
          chunkedArray.push(chunk);  
        }
          columnArray = chunkedArray;
      }


  changeStoicArray(category: string){
    let tempArray: Stoic[] = [];
    this.stoicService.getStoicsByCategory(category).subscribe((data) => {
      tempArray = data;
      // Array.prototype.push.apply(this.stoicsArray, tempArray);
      this.stoicsArray.splice(0, this.stoicsArray.length, ...tempArray);
    })
  }

}
