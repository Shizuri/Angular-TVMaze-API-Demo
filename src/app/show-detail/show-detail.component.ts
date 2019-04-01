import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-show-detail',
    templateUrl: './show-detail.component.html',
    styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

    show: any;
    cast: any[];
    episodes: any[];

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getShow();
        this.getCast();
        this.getEpisodes();
    }

    getShow() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data.getShow(id)
            .subscribe(show => this.show = show);
    }

    getCast() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data.getCast(id)
            .subscribe(cast => this.cast = cast);
    }

    getEpisodes() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data.getEpisodes(id)
            .subscribe(episodes => this.episodes = episodes);
    }
}
