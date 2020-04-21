import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AssetUrlDirective } from './directives/asset-url.directive';
import { SeriesContainerComponent } from './components/series-container/series-container.component';
import { HttpClientModule } from '@angular/common/http';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';
import { FilterByName } from './pipes/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssetUrlDirective,
    SeriesContainerComponent,
    SerieItemComponent,
    SerieDetailComponent,
    FilterByName
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
