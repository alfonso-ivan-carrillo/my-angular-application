import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlphaOnlyDirective } from '../directives/alpha-only.directive';

@Component({
  selector: 'app-my-worksheet',
  templateUrl: './my-worksheet.component.html',
  styleUrls: ['./my-worksheet.component.css'],
  standalone: false,
})
export class MyWorksheetComponent implements OnInit {
  testDate: string = new Date().toISOString().split('T')[0];
  minDate: string = new Date().toISOString().split('T')[0];
  maxDate: string = new Date().toISOString().split('T')[0];

  wordToGuess: number;

  skipNumber: number;
  nextNumber: number;
  isNextNumber: boolean = false;

  wordToExtract: string;
  isExtracted: boolean = false
   
  dating: Date = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.minDateCalulation();
    this.maxDateCalulation();
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

  minDateCalulation(){
    const today = new Date();
    const localDate = today.toLocaleDateString('en-CA');
    this.minDate = localDate;
  }

  maxDateCalulation(){
    const today = new Date();
    const nextYearDate = new Date(today);
    nextYearDate.setFullYear(today.getFullYear() + 1);
    this.maxDate = nextYearDate.toISOString().split('T')[0];
    console.log(this.maxDate);
  }

  displayDate(inputDate: string) {
    // display utc date at 00:00:00 time, but will display based on user's local time, central time zone @ 18:00
    const [year, month, day] = inputDate.split('-').map(Number);

    const utcDate = new Date(Date.UTC(year, month - 1, day));
    console.log(utcDate);
  }

  displayTimeDate(dateString: string) {
    console.log(dateString);
    let zDate: Date = new Date();
    // create a date object from a date string based on current time zone, solves the issue of utc date being desplayed instead of local time date?
    zDate = new Date(new Date(dateString).toISOString().replace('.000Z', ''));
    console.log(zDate);
    console.log(typeof zDate);
  }

  getUTCDate(dateString: string) {
    let date = new Date(dateString);
    let now_utc = Date.UTC(
      date.getUTCFullYear(), // Gets year in UTC (e.g., 2024)
      date.getUTCMonth(), // Gets month in UTC (0-11, where 0 = January)
      date.getUTCDate(), // Gets day of month in UTC (1-31)
      date.getUTCHours(), // Gets hours in UTC (0-23)
      date.getUTCMinutes(), // Gets minutes in UTC (0-59)
      date.getUTCSeconds() // Gets seconds in UTC (0-59)
    );
    let utcDate = new Date(now_utc);
    console.log(utcDate);
  }

  skipThisNumber(skipNumber: any) {
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (typeof skipNumber != 'number') {
      alert('Please enter a number!');
    }

    const indexNum = numArray.findIndex((num) => num === skipNumber);
    if (indexNum !== -1 && indexNum < numArray.length - 1) {
      this.nextNumber = numArray[indexNum + 1];
      this.isNextNumber = true;
      console.log(`Next number is ${this.nextNumber}.`);
    } else if(indexNum == numArray.length -1) {
      this.nextNumber = numArray[0]
    }else {
      alert('Number not found.');
    }
  }

extractVowels(inputString: string) {
  let vowels = ['a', 'e', 'i', 'o', 'u' ];
  let newWord = '';
  if(inputString) {
  inputString =inputString.toLowerCase();
  for(let i = 0; i < inputString.length; i++){
    if(!vowels.includes(inputString[i])){
      newWord += inputString[i];
    }
  }
  this.isExtracted = true;
  this. wordToExtract = newWord;
} else {
  alert('Please enter a word to extract vowels!');
}
}

extractVowelsRegex(inputString: string): string {
  let vowelsRemoved = inputString.replace(/[aeiou]/gi, '');
  return vowelsRemoved
}

extractVowesArrayMethods(inputString: string): string{
  let vowels = ['a', 'e', 'i', 'o', 'u' ];
  console.log([...inputString.toLowerCase()].filter(char => !vowels.includes(char)).join(''));
  return [...inputString.toLowerCase()].filter(char => !vowels.includes(char)).join('');
}

resetWord(){
  this.wordToExtract = '';
  this.isExtracted = false;
}

}
