import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/Superhero.model';
import { SuperheroAPIService } from '../services/superheroAPI.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrl: './super-hero.component.css',
  standalone: false,
})
export class SuperHeroComponent implements OnInit {
  superHeroes: Superhero[] = [];
  superNames: string[] = [];
  superTeams: string[] = [];
  superOrigin: string[] = [];
  selectedSuperhero: Superhero;
  isSelectedSuperhero: boolean = false;
  selectedOriginArray: Superhero[] = [];
  isSelectedOrigin: boolean = false;
  selectedTeamArray: Superhero[] = [];
  isSelectedTeam: boolean = false;
  heroName: string;
  heroOrigin: string;
  heroPower: string;
  heroTeam: string;
  newNames: Superhero[] = [];

  newHero: Superhero;
  newName: string;
  newOrigin: string;
  newTeam: string;
  newPower: string;
  isNewSuper: boolean = false;
  isNewName: boolean = false;
  isNewOrigin: boolean = false;
  isnewTeam: boolean = false;
  isNewPower: boolean = false;

  constructor(
    private superheroAPI: SuperheroAPIService,
    private router: Router
  ) {}

  ngOnInit() {
    this.superheroAPI.getSuperheroes().subscribe((data) => {
      this.superHeroes = data;
      this.removeTeamDupes(this.superHeroes);
      this.removeOriginDupes(this.superHeroes);
      this.sortByName(this.superHeroes);
      console.log(this.superHeroes);
      console.log(this.superTeams);
      console.log(this.superOrigin);
    });
  }

  routePage(page: string) {
    this.router
      .navigate([page])
      .then(() => {
        console.log('Navigation to ' + page + ' successful.');
      })
      .catch((error) => {
        console.error('Navigation failed: ', error);
      });
  }

  removeTeamDupes(superHeroes: Superhero[]) {
    let tempArray = [];
    for (let superhero of this.superHeroes) {
      tempArray.push(superhero.team);
    }
    const uniqueArray = [...new Set(tempArray)];
    this.superTeams = uniqueArray;
    this.superTeams = this.sortArrayAsscending(this.superTeams);
    console.log(this.superTeams);
  }

  removeOriginDupes(superHeroes: Superhero[]) {
    let tempArray = [];
    for( let superhero of this.superHeroes){
      tempArray.push(superhero.origin);
    }
    const uniqueArray = [...new Set(tempArray)];
    this.superOrigin = this.sortArrayAsscending(uniqueArray);
    console.log(this.superOrigin);
  }
  sortByName(superhero: Superhero[]){
    let tempArray = [];
    for(let hero of superhero){
      tempArray.push(hero.name);
    }
    const uniqueArray = [...new Set(tempArray)];
    this.superNames = this.sortArrayAsscending(uniqueArray);
    console.log(this.superNames);
  }

  sortArrayAsscending(array: any[]){
    return array.sort((a, b) => a.localeCompare(b));
  }

displayHero(searchString: string){
  let tempArray = [];
  for(const superhero of this.superHeroes){
    if(superhero.name === searchString){
      this.selectedSuperhero = superhero;
      this.isSelectedSuperhero = true;
      this.isSelectedOrigin = false;
      this.isSelectedTeam = false;
    } else if (superhero.origin === searchString){
      tempArray.push(superhero);
      this.selectedOriginArray = tempArray;
      this.isSelectedOrigin = true;
      this.isSelectedSuperhero = false;
      this.isSelectedTeam = false;
    } else if (superhero.team === searchString){
      tempArray.push(superhero);
      this.selectedTeamArray = tempArray;
      this.isSelectedTeam = true;
      this.isSelectedSuperhero = false;
      this.isSelectedOrigin = false;
    }
  }
}

closeClear(){
  this.isSelectedSuperhero = false;
  this.isSelectedOrigin = false;  
  this.isSelectedTeam = false;
  this.selectedSuperhero = null;
  this.selectedOriginArray = [];
  this.selectedTeamArray = [];
  this.heroName = "";
  this.heroOrigin= "";
  this.heroTeam = "";
}

buildSuperhero(){
  
  let buildHero = {
    id: this.superHeroes.length + 1,
    name: this.newName,
    origin: this.newOrigin,
    team: this.newTeam,
    power: this.newPower
  }
  this.isNewSuper = true;
  this.newHero = buildHero;
  console.log(this.newHero);
}





//   assetTruck = { id: 1, name: "truck", color: "red", make: "toyota", owner: "Joe" }
//   newColor: string = "purple";
//   newOwner: string = "Little Man";
  
// updateMethod(newData: any){
//   this.assetTruck = {
//     ...this.assetTruck,
//     ...newData
//   };
//   console.log(this.assetTruck);
// }

}