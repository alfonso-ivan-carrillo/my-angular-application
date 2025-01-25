import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-worksheet',
    templateUrl: './my-worksheet.component.html',
    styleUrls: ['./my-worksheet.component.css'],
    standalone: false
})
export class MyWorksheetComponent {
  testDate: Date;

  constructor(
    private router: Router,
  ){}

  routeToPage(page: string){
    this.router.navigate([page]).then(() =>{ 
      console.log('Navigation to ' + page + ' successful');
    }).catch(error =>{ 
      console.error('Navigation to ' + page + ' failed:', error);
    });
  }

  displayDate(inputDate: string){
   const [year , month, day] = inputDate.split('-').map(Number);

   const utcDate = new Date(Date.UTC(year, month - 1, day));
   console.log(utcDate)
  }

  displayTimeDate(dateString: string){
    const epochDate = new Date(0);

    const targetDate = new Date(dateString);

    const timeDifferenceMilliseconds = targetDate.getTime() - epochDate.getTime();

    console.log(`Time difference in milliseconds: ${timeDifferenceMilliseconds} `);
    let newDate = new Date(timeDifferenceMilliseconds)
    console.log(newDate);
  }

}
