import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stoic } from '../models/Stoic.model';
import { StoicAPIService } from '../services/stoicAPI.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-stoic-page',
  templateUrl: './stoic-page.component.html',
  styleUrls: ['./stoic-page.component.css'],
  standalone: false,
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

  stoicsArray: Stoic[] = [];
  testArray: Stoic[] = [];
  wordsArray: string[] = [];
  filterArray: string[] = [];
  filterCat: string[] = [];
  filteredStoics: string[] = [];
  searchByLetter: string = '';
  isFiltered: boolean = false;

  constructor(private router: Router, private stoicService: StoicAPIService) {}

  ngOnInit() {
    this.stoicService
      .getStoics()
      .pipe(
        map((data) =>
          data.map((stoic) => ({
            ...stoic,
            name: stoic.name.toUpperCase(),
            description: stoic.description.toUpperCase(),
            category: stoic.category.toUpperCase(),
          }))
        )
      )
      .subscribe((data) => {
        this.testArray = data;
        console.log(this.testArray);
      });

    this.stoicService
      .getStoics()
      .pipe(map((data) => data.map((stoic) => stoic.name)))
      .subscribe((names) => {
        // names = transformed data that contains the names of the stoics
        this.wordsArray = names;
        console.log(this.wordsArray);
      });

    this.stoicService
      .getStoics()
      .pipe(map((data) => data.filter((stoic) => stoic.name.startsWith('S'))))
      .subscribe((filteredNames) => {
        this.filterArray = filteredNames;
        console.log(this.filterArray);
      });

    this.stoicService
      .getStoics()
      .pipe(
        map((data) =>
          data.filter((stoic) => stoic.category === 'Roman Stoicism')
        )
      )
      .subscribe((cat) => {
        this.filterCat = cat;
        console.log(this.filterCat);
      });

    this.stoicService.getStoics().subscribe((data) => {
      this.stoicsArray = data;
      console.log(this.stoicsArray);
      this.chunkingArray(this.stoicsArray, 2);
    });
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

  getStoicbyName(name: string) {
    this.stoicService.getStoicsByName(name).subscribe((data) => {
      this.selectedStoic = data;
      console.log(this.selectedStoic);
      this.byRadio = true;
    });
  }

  getStoicbyCategory(category: string) {
    this.stoicService.getStoicsByCategory(category).subscribe((data) => {
      this.selectedCategory = data;
      this.chunkingArray(this.selectedCategory, this.numPerColumns);
      this.byCategory = true;
      console.log(this.selectedCategory);
    });
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

  changeStoicArray(category: string) {
    let tempArray: Stoic[] = [];
    this.stoicService.getStoicsByCategory(category).subscribe((data) => {
      tempArray = data;
      // Array.prototype.push.apply(this.stoicsArray, tempArray);
      this.stoicsArray.splice(0, this.stoicsArray.length, ...tempArray);
    });
  }

  filterStoics(searchByLetter: string) {
    this.filteredStoics = this.wordsArray.filter(
      (stoic) => stoic.startsWith(searchByLetter.toUpperCase())
    );
    console.log(this.filteredStoics);
    if(this.filteredStoics.length === 0){
      this.searchByLetter = '';
      this.isFiltered = false;
      alert('No Stoics found');
    } else {
      this.isFiltered = true;
      this.searchByLetter = '';
    }
  }

}
