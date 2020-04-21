import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mar-angular-front';

  constructor() {
    window.addEventListener('scroll', () => {
      console.log('scrollando');
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('scrollando');
  }
}
