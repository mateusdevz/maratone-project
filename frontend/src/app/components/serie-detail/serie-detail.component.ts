import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from 'src/app/services/series.service';
import { SeriesDetailModel } from 'src/app/models/series-detail.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  imdbId: string;
  serieItemDetail: SeriesDetailModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serieService: SerieService
  ) { }

  ngOnInit() {
    this.imdbId = this.activatedRoute.snapshot.params.idserie;
    this.serieService.details(this.imdbId).subscribe(details => {
      this.serieItemDetail = details;
      console.log(this.serieItemDetail);
    });
  }

  download(link: string): void {
    const test = JSON.stringify(link);
    this.serieService.getTorrentCode(link).subscribe(code => {
      const hash = code.infoHash;
      console.log('teste', code);
      // window.open(`${environment.MAR_TORRENT_DOWNLOAD}/torrent/download?torrentId=${hash}&fileType=video`, '_blank');
    });
  }
}
