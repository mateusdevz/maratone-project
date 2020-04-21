import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private filter$: Subject<string> = new Subject();

  constructor() { }

  get filter(): Subject<string> {
    return this.filter$;
  }

  setSearch(filter: string): void {
    this.filter$.next(filter);
  }
}
