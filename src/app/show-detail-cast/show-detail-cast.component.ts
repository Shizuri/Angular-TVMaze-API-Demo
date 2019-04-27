import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-show-detail-cast',
    templateUrl: './show-detail-cast.component.html',
    styleUrls: ['./show-detail-cast.component.css']
})
export class ShowDetailCastComponent implements OnInit {

    cast;
    loading = true;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getCast();
    }

    getCast() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data.getCast(id)
            .subscribe(cast =>{
                this.cast = cast;
                this.loading = false;
            });
    }

}
