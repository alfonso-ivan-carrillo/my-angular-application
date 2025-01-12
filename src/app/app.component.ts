import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Person } from './models/Person.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num: number[] = [1, 2, 3, 4, 5];
  pairs: string = '(){}[]';
  numPerColumns: number = 2;
  chunkedArray: any[][] = [];
  isTransformed: boolean = false;
  ageArray: any[] = [];

  ngOnInit() {
    this.logArray(["time", "is", "on", "the", "moon"]);
    this.loopThrough(["time", "is", "on", "the", "moon"]); 
    console.log(this.romanToNumber('IX'));
    console.log(this.romanToNumber('XIV'));
    console.log(this.romanToNumber('MCMXCIV'))
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  routeToHeroPage(){
    this.router.navigate(['/hero-page'], { relativeTo: this.route });
  }

  validPair(s: string) {}

  getLastThree(str: string): string{
    if(str.length < 3){
      return str;
    } else {
      return str.slice(-3);
    }
  }

  logStrings(input: string | string[]){
    const strings = Array.isArray(input) ? input : [input];
    
    strings.forEach((currentString, index) => {
      if(!currentString){
        console.log("empty string")
      }

      const currentLastThree = this.getLastThree(currentString);

      if(index > 0){
        const previousString = strings[index - 1];
        const previousLastThree = this.getLastThree(previousString);

        if(currentLastThree === previousLastThree){
          console.log("\n")
        }
      }
      console.log(currentString)
    });
  }

  loopThrough(input: string | string[]){
    for (let i = 0; i < input.length; i++){
      console.log([i]);
    }
    const arrayInput = Array.isArray(input) ? input : [input];
    arrayInput.forEach((letter, index) => {
      console.log(letter, index);
    });
  }

  logArray(input : string[]){
    const newString = input.join(" ");
    console.log(newString);

    let newWord = "";
    for (let i = 0; i < input.length; i++){
      newWord += (input[i] + " ");
    }
    console.log(newWord);
  };

  romanToNumber(input: string): number {
    let result = 0;
    let romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    for (let i = 0; i < input.length -1; i++){
      if(romanMap[input[i]] < romanMap[input[i + 1]]){
        result -= romanMap[input[i]];
      } else {
        result += romanMap[input[i]]
      }
    }
    return result + romanMap[input[input.length -1]]
  }



}
