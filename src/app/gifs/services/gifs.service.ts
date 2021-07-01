import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Gif, GifResponseInterface} from '../gif-interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apikey = 'M2En6TLx96MuoJKtPiJQdCKM75eUzoy5';
  private baseUrl = 'https://api.giphy.com/v1/gifs/search';
  private endpoint = `${this.baseUrl}?api_key=${this.apikey}`;
  // tslint:disable-next-line:variable-name
  private _history: string[] = [];
  // TODO: Cambiar el tipo de dato por el adecuado
  public result: Gif[] = [];
  public pagination;

  constructor(
    private http: HttpClient
  ) { }

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
    }

    this.http.get<GifResponseInterface>(`${this.baseUrl}?api_key=${this.apikey}&q=${query}
    &limit=10&offset=0&rating=g&lang=en`).subscribe((response) => {
      this.result = response.data;
      this.pagination = response.pagination;
    });
  }

}
