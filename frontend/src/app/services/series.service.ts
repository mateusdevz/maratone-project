import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeriesInfoDownloadModel } from '../models/series-info-download.model';

@Injectable({
    providedIn: 'root'
})
export class SerieService {

    constructor(private http: HttpClient) {}

    public pages(): Observable<any> {
      return this.http.get(`${environment.POPCORN_API}/shows`);
    }

    public shows(pagina: string): Observable<any> {
      return this.http.get(`${environment.POPCORN_API}/${pagina}?sort=name&order=1`);
    }

    public details(imdbid: string): Observable<any> {
      return this.http.get<any>(`${environment.POPCORN_API}/show/${imdbid}`);
    }

    public getTorrentCode(torrentlink: string): Observable<any> {
      return this.http.post<any>(`${environment.MAR_TORRENT_DOWNLOAD}/torrent/`, { test: torrentlink});
    }
}
