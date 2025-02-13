import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person.model';
import { Router } from '@angular/router';
import { SuperheroAPIService } from '../services/superheroAPI.service';

@Component({
    selector: 'app-hero-page',
    templateUrl: './hero-page.component.html',
    styleUrls: ['./hero-page.component.css'],
    standalone: false
})
export class HeroPageComponent implements OnInit{

  theBandNames: Person[] = [
      { name: 'Golden Gabe', age: 40, skill: 'Sword' },
      { name: 'Clay Cooper', age: 40, skill: 'Shield' },
      { name: 'Matrik Skulldrummer', age: 39, skill: 'Knives' },
      { name: 'Ganalon', age: 29, skill: 'Axe' },
      { name: 'Moog', age: 50, skill: 'Magic' },
      { name: 'Kit the Unkillable', age: 2004, skill: 'Wit' },
      { name: 'Nine Fingers', age: 40, skill: 'Sword' },
      { name: 'The Hound', age: 30, skill: 'Sword'}
    ];

    numPerColumns: number = 2;
    chunkedArray: any[][] = [];
    isTransformed: boolean = false;
    ageArray: any[] = [];  
    superheroes: any[] = [];


    constructor(
      private router: Router,
      private superheroAPI: SuperheroAPIService
    ){}

    ngOnInit(){
      this.superheroAPI.getSuperheroes().subscribe((data) => {
        this.superheroes = data;
        console.log(this.superheroes);
      })
    }


    routePage(page: string){
      this.router.navigate([page]).then(() => {
        console.log('Navigation to ' + page + ' successful');
      }).catch(error => {
        console.error('Navigation failed:', error)
      })
    }

    chunkingArray(columnArray: Person[]) {
      this.chunkedArray = [];
      for (let i = 0; i < columnArray.length; i += this.numPerColumns) {
        const chunk = columnArray.slice(i, i + this.numPerColumns);
        this.chunkedArray.push(chunk);
        this.isTransformed = false;
      }
    }

    transformArray(columnArray: Person[]) {
      let newArray = [];
      newArray.push(
        ...columnArray.map((item) => ({
          name: item.name + ' the great',
          age: item.age == 40 ? 45 : item.age,
          skill:
            item.skill == 'Shield' || item.skill == 'Magic' ? 'Wand' : 'Sticks',
        }))
      );
      this.chunkingArray(newArray);
      this.isTransformed = true;
    }
  
    filterAging(columnArray: Person[]) {
      this.ageArray = []
      this.ageArray.push(...columnArray.filter((item) => item.skill == 'Magic'));
      console.log(this.ageArray); 
    } 
}
