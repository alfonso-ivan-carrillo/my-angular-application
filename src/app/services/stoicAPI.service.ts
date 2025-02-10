import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stoic } from '../models/Stoic.model';

@Injectable({
  providedIn: 'root',
})
export class StoicAPIService {
  private stoicsUrl = 'assets/mock-stoic-data.json';

  constructor(private http: HttpClient) {}

  getStoics(): Observable<any[]> {
    return this.http
      .get<any>(this.stoicsUrl)
      .pipe(map((data) => Object.values(data.stoics)));
  }

  getStoicsByName(name: string): Observable<Stoic[]> {
    return this.http
      .get<{stoics: Stoic[]}>(this.stoicsUrl)
      .pipe(
        map((data) =>
          data.stoics.filter(
            (data) => data.name.toLowerCase() === name.toLowerCase()
          )
        )
      );
  }

  getStoicsByCategory(category: string): Observable<Stoic[]> {
    return this.http.get<{ stoics: Stoic[] }>(this.stoicsUrl)
    .pipe(map((data) => data.stoics.filter((data) => data.category.toLowerCase() === category.toLowerCase())));
  }
}
