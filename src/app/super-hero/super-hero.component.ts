import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/Superhero.model';
import { SuperheroAPIService } from '../services/superheroAPI.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrl: './super-hero.component.css',
  standalone: false
})
export class SuperHeroComponent implements OnInit {

  superHeroes: Superhero[] = [];
  supersName: string = '';
  newNames: Superhero[] = [];


  constructor(
    private superheroAPI: SuperheroAPIService,
    private router: Router
  ){}

ngOnInit(): void {
    this.superheroAPI.getSuperheroes().subscribe((data) => {
      this.superHeroes = data;
      console.log(this.superHeroes)
      this.superHeroes.forEach(superHero => {
        console.log(superHero);
      });
    });

 
}

routePage(page: string){
  this.router.navigate([page]).then(() => {
    console.log('Navigation to ' + page + ' successful.');
  }).catch(error => {
    console.error('Navigation failed: ', error);
  })
}


displayArray(){
  let tempArray;
  this.superHeroes.forEach((superhero) => {
    tempArray.push(superhero.name)
  })
  console.log(tempArray)
}

}
