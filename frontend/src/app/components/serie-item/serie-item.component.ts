import { Component, OnInit, Input } from '@angular/core';
import { SeriesModel } from 'src/app/models/series.model';
import { Router } from '@angular/router';

export const POSTER_ERROR = 'images/posterholder.png';
@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.scss']
})

export class SerieItemComponent implements OnInit {

  @Input()
  serie: SeriesModel;

  verifyPoster = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.serie.images.poster !== POSTER_ERROR &&
       this.serie.images.poster !== 'http://thetvdb.com/banners/posters/5be31ada87e71.jpg' &&
       this.serie.images.poster !== 'http://thetvdb.com/banners/posters/235861-1.jpg') {
      this.verifyPoster = true;
    }
  }

  navigate(): void {
    this.router.navigate(['series', this.serie.imdb_id]);
  }
}
