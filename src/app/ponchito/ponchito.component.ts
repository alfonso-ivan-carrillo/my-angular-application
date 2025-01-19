import { Component, OnInit } from '@angular/core';
import { PeopleAPIService } from '../services/peopleAPI.service';
import { People } from '../models/People.model';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-ponchito',
    templateUrl: './ponchito.component.html',
    styleUrls: ['./ponchito.component.css'],
    standalone: false
})
export class PonchitoComponent implements OnInit{
  myFamily: People[] = [];
  filteredFamily: People[] = [];
  isFiltered: boolean = false;
  myName: string = 'Alfonso';
  testNums: number[] = [1,2,3,4,5,6,7,8,9,10];


  constructor(
    private peopleServices: PeopleAPIService
  ){}

  ngOnInit(): void {
    this.peopleServices.getPeople().subscribe((data) => {
      this.myFamily = data;
      console.log(this.myFamily);
    });
    this.findNumber(this.testNums, 19);
    console.log(this.palindrome(101));
    console.log(this.palindrome(12321));
    console.log(this.palindrome(12345));
    console.log(this.palindrome(-121));
  }

  familyFilter(family: People[]){
    this.filteredFamily = family.filter(person => person.name.includes('Carrillo'));
    this.isFiltered = !this.isFiltered;
    console.log(this.filteredFamily);
  }

findNumber(numArray: number[], targetNum: number): boolean{
  for (let i = 0; i < numArray.length; i++){
    // console.log("i: ", numArray[i]);
    for(let j = 1; j < numArray.length; j++){
      // console.log("j: ", numArray[j]);
      if( numArray[i] + numArray[j] === targetNum){
        let firstPosition = i; 
        let secondPosition = j;
        console.log("First position: ", firstPosition);
        console.log("Second position: ", secondPosition);
        console.log("Found: ", numArray[i] + " "+ numArray[j]);
        return true;
      }
    }
  }
};

palindrome(num: number): boolean {
  // let strNum: string = num.toString()
  // let revNum: string[] = []; 
  // let stringNum: string = '';
  // for(let j = strNum.length -1; j >= 0; j--){
    
  //   revNum.push(strNum[j]);
  //   stringNum += revNum[revNum.length -1]
  // }
  // if(stringNum === strNum){
  //   return true;
  // } else {
  //   return false;
  // }

  let reverseNum = parseInt([...String(num).split('').reverse()].join(''));
  if(reverseNum == num){
      return true;
  } else {
      return false;
  }
}


}