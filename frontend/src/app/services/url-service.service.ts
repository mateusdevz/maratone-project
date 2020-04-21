import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  public assetUrl(src: string): string {
    return `${environment.ASSETS_URL}${src}`;
  }
}
