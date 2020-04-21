import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieResolver } from './resolvers/series.resolver';
import { SeriesContainerComponent } from './components/series-container/series-container.component';
import { SerieDetailComponent } from './components/serie-detail/serie-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'series'
  },
  {
    path: 'series',
    component: SeriesContainerComponent,
    resolve: {
        series: SerieResolver
    }
  },
  {
    path: 'series/:idserie',
    component: SerieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
