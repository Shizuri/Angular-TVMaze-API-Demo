import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  showsUrl: string = 'http://api.tvmaze.com/search/shows?q=';

  constructor(private http: HttpClient) { }

  getStuff(): Observable<any> {
    return this.http.get(this.showsUrl);
  }

  searchShow(term: string): Observable<any> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<any[]>(`${this.showsUrl}${term}`);
  }
}
