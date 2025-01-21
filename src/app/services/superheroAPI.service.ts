import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Superhero } from '../models/Superhero.model';

@Injectable({
    providedIn: 'root'
})
export class SuperheroAPIService {
    private dataUrl = 'assets/mock-super-hero-data.json';

    constructor(private http: HttpClient){}

    getSuperheroes(): Observable<Superhero[]> {
        return this.http.get<Superhero[]>(this.dataUrl).pipe(map(data => Object.values(data)));
    }
}