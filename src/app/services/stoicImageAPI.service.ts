import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { StoicImages } from "../models/Stoic-Images.model";

@Injectable({ 
    providedIn: 'root',
})
export class StoicImageAPIService {
    private stoicImagesUrl = "assets/mock-stoic-images-data.json";

    constructor(private http: HttpClient) { }

    getStoicImages(): Observable<StoicImages[]> {
        return this.http.get<any>(this.stoicImagesUrl).pipe(map((data) => 
        Object.values(data)));
    }






}