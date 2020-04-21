import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm: string;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() { }

  onKey(event: KeyboardEvent) {
    setTimeout(() => {
      this.searchTerm = (event.target as HTMLInputElement).value;
      this.searchService.setSearch(this.searchTerm);
    }, 500);
  }
}
