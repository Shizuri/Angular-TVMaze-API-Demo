import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-show-detail-description',
    templateUrl: './show-detail-description.component.html',
    styleUrls: ['./show-detail-description.component.css']
})
export class ShowDetailDescriptionComponent implements OnInit {

    show;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getShow();
    }

    getShow() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data.getShow(id)
            .subscribe(show => this.show = show);
    }

}
