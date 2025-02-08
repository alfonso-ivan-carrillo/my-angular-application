import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoicAPIService {
  private stoicUrl = 'assets/mock-stoic-data.json';

  constructor(private http: HttpClient) {}

  getStoics(): Observable<any[]> {
    return this.http
      .get<any>(this.stoicUrl)
      .pipe(map((data) => Object.values(data.stoics)));
  }
}
