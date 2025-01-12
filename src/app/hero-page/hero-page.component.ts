import { Component } from '@angular/core';
import { Person } from '../models/Person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {

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

    constructor(
      private router: Router,
    ){}

    ngOnInit(){
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
        console.log(this.chunkedArray);
        this.isTransformed = false;
        console.log(this.isTransformed);  
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
      console.log(this.isTransformed);
    }
  
    filterAging(columnArray: Person[]) {
      this.ageArray = []
      this.ageArray.push(...columnArray.filter((item) => item.skill == 'Magic'));
      console.log(this.ageArray); 
    } 
}
