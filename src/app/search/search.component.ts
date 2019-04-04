import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    loading = true;
    shows$;
    showName = new FormControl(''); //for Reactive Forms
    showList; //for Reactive Forms
    private searchTerms = new Subject<string>();

    constructor(private data: DataService) { }

    search(term: string) {
        this.searchTerms.next(term);
    }

    ngOnInit() {
        this.loading = false;

        this.shows$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.data.searchShow(term))
        );

        this.showName.valueChanges.pipe( //for Reactive Forms
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.data.searchShow(term)),
        ).subscribe(res => this.showList = res);

        console.log(this.showName.valueChanges); //for Reactive Forms
    }

}
