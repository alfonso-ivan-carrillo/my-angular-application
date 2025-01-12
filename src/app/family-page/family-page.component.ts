import { Component } from '@angular/core';
import { PeopleAPIService } from '../services/peopleAPI.service';
import { People } from '../models/People.model';
import { Pet } from '../models/Pet.model';
import { PetAPIService } from '../services/petAPI.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-page',
  templateUrl: './family-page.component.html',
  styleUrls: ['./family-page.component.css']
})
export class FamilyPageComponent {
  isPonchito: boolean = false;
  isPoncho: boolean = false;
  isAlfonso: boolean = false;
  isWhatShouldBe: boolean = false;
  myPeople: People[] = [];
  pets: Pet[] = [];
  numPerColumns: number = 2;

  constructor(
    private peopleAPIService: PeopleAPIService,
    private petAPIService: PetAPIService,
    private router: Router,
  ) { } 

  ngOnInit(): void {
    this.peopleAPIService.getPeople().subscribe((data) => {
      this.myPeople = data;
      console.log(this.myPeople);
      this.chunkingArray(this.myPeople);
    });
    this.petAPIService.getPet().subscribe((data) => {
      this.pets = data;
      console.log(this.pets);
    });
    
  }

  routeToPage(page: string){
    this.router.navigate([page]).then(() => {
      console.log('Navigation to ' + page + ' successful');
    }).catch(error => {
      console.error('Navigation to ' + page + ' failed:', error);
    })
  }

  chunkingArray(columnArray: People[]) {
      console.log(columnArray);
      const chunkedArray = [];
      for (let i = 0; i < columnArray.length; i += this.numPerColumns) {
        const chunk = columnArray.slice(i, i + this.numPerColumns);
        chunkedArray.push(chunk);  
      }
        columnArray = chunkedArray;
    }


}
