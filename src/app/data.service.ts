import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    showsUrl: string = 'http://api.tvmaze.com/search/shows?q=';
    singleShowUrl: string = 'http://api.tvmaze.com/shows/';

    constructor(private http: HttpClient) { }

    getShowList(): Observable<any> {
        return this.http.get(this.showsUrl);
    }

    searchShow(term: string): Observable<any> {
        if (!term.trim()) {
            return of([]);
        }
        return this.http.get<any[]>(`${this.showsUrl}${term}`);
    }

    getShow(id: number): Observable<any> {
        // console.log(`string is: ${this.singleShowUrl}${id}`);
        return this.http.get(`${this.singleShowUrl}${id}`);
    }

    getCast(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.singleShowUrl}${id}/cast`);
    }

    getEpisodes(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.singleShowUrl}${id}/episodes`);
    }
}
