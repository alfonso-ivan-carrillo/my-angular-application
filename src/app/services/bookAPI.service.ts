import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root'
})
export class BookAPIService {
    private dataUrl = 'assets/mock-book-data.json'; 

    constructor(private http: HttpClient) { }

    getBooks(): Observable<any[]> {
        return this.http.get<any>(this.dataUrl).pipe(map(data => Object.values(data.books)))
    }
}