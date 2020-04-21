import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesModel } from 'src/app/models/series.model';
import { SearchService } from 'src/app/services/search.service';
import { DOCUMENT } from '@angular/common';
import { SerieService } from 'src/app/services/series.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-series-container',
  templateUrl: './series-container.component.html',
  styleUrls: ['./series-container.component.scss']
})
export class SeriesContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('seriesContainer', {static: false}) seriesContainer: ElementRef;
  @ViewChild('loadTarget', {static: false}) loadTarget: ElementRef;

  allSeries: SeriesModel[] = [];
  filteredSeries: SeriesModel[];
  pageCounter = 1;
  loadMoreSeries = false;
  searchTerm: string;

  isSearching: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private seriesService: SerieService
  ) { }

  ngOnInit() {
    this.filteredSeries = this.activatedRoute.snapshot.data.series;
    this.serieForSearch();

    this.searchService.filter.subscribe(searchTerm => {
      this.searchTerm = searchTerm;

      if (this.searchTerm !== '') {
        this.isSearching = true;
      } else {
        this.isSearching = false;
      }
    });
  }

  ngAfterViewInit(): void {
      this.seriesContainer.nativeElement.addEventListener('scroll', $event => {
        if ($event.target.scrollHeight >= this.loadTarget.nativeElement.offsetTop) {
          this.pageCounter++;
          this.loadSerie();
        }
    });
  }

  loadSerie(): void {
    this.seriesService.pages().pipe(
      tap(pages => {
        this.seriesService.shows(pages[this.pageCounter])
        .subscribe(pageWithSeries => {
          this.filteredSeries = this.filteredSeries.concat(pageWithSeries);
        });
      })
    ).subscribe();
  }

  serieForSearch(): void {
    this.seriesService.pages().pipe(
      tap(pages => {
        pages.forEach(page => {
          this.seriesService.shows(page)
          .subscribe(pageWithSeries => {
            this.allSeries = this.allSeries.concat(pageWithSeries);
          });
        });
      })
    ).subscribe();
  }
}
