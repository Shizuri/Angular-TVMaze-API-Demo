import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, Subject } from 'rxjs';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    shows$: Observable<any[]>;
    private searchTerms = new Subject<string>();

    constructor(private data: DataService) { }

    search(term: string) {
        this.searchTerms.next(term);
    }

    ngOnInit() {
        this.shows$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.data.searchShow(term)),
        );
    }

}
