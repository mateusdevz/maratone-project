import { Directive, Input, ElementRef } from '@angular/core';
import { UrlService } from '../services/url-service.service';


@Directive({
  selector: '[appAssetUrl]'
})
export class AssetUrlDirective {

  constructor(
    private el: ElementRef,
    private service: UrlService
  ) { }

  @Input()
  set image(src: string) {
    this.el.nativeElement.src = this.service.assetUrl(src);
  }
}
