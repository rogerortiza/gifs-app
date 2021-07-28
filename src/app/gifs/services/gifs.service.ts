import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, GifResponseInterface} from '../gif-interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apikey = 'M2En6TLx96MuoJKtPiJQdCKM75eUzoy5';
  private baseUrl = 'https://api.giphy.com/v1/gifs/search';
  // tslint:disable-next-line:variable-name
  private _history: string[] = [];
  public result: Gif[] = [];
  public pagination;

  constructor(
    private http: HttpClient
  )
  {
    this._history = JSON.parse(sessionStorage.getItem('history')) || [];
  }

  get history(): string[] {
    return [...this._history];
  }

  searchGifs(query: string): void {
    if (query === '') {
      return;
    }

    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      sessionStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('q', query)
      .set('limit', '10')
      .set('offset', '0');

    this.http.get<GifResponseInterface>(`${this.baseUrl}`, {params}).subscribe((response) => {
      this.result = response.data;
      this.pagination = response.pagination;
    });
  }

}
