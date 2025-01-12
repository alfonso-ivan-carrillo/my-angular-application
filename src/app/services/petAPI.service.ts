import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PetAPIService {
    private dataUrl = 'assets/mock-pet-data.json'; 

    constructor(private http: HttpClient) { }

    getPet(): Observable<any> {
        return this.http.get<any>(this.dataUrl).pipe(map(data => Object.values(data.pets))
        );
    }
}