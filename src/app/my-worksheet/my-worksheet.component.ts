import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-worksheet',
  templateUrl: './my-worksheet.component.html',
  styleUrls: ['./my-worksheet.component.css'],
  standalone: false,
})
export class MyWorksheetComponent {
  testDate: string = new Date().toISOString().split('T')[0];

  constructor(private router: Router) {}

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
    console.log(date);
    let now_utc = Date.UTC(
      date.getUTCFullYear(), // Gets year in UTC (e.g., 2024)
      date.getUTCMonth(), // Gets month in UTC (0-11, where 0 = January)
      date.getUTCDate(), // Gets day of month in UTC (1-31)
      date.getUTCHours(), // Gets hours in UTC (0-23)
      date.getUTCMinutes(), // Gets minutes in UTC (0-59)
      date.getUTCSeconds() // Gets seconds in UTC (0-59)
    );

    console.log(now_utc);
    let utcDate = new Date(now_utc);
    console.log(utcDate);
  }




  
}
