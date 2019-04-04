import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-show-detail-episodes',
    templateUrl: './show-detail-episodes.component.html',
    styleUrls: ['./show-detail-episodes.component.css']
})
export class ShowDetailEpisodesComponent implements OnInit {

    episodes;
    loading = true;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getEpisodes();
    }

    getEpisodes() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.data.getEpisodes(id)
            .subscribe(episodes =>{
                this.episodes = episodes;
                this.loading = false;
            });
    }
}
