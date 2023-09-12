import { Gif } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchGifResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private _apiKey: string = 'K1TP3l79EczJc8bIdzij54BJ5MZ5o5Jd';
  private _baseUrl: string = 'https://api.giphy.com/v1/gifs';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('lastResult')!) || [];
  }

  get history() {
    return [...this._history];
  }

  searchGifs = (item: string = ''): void => {
    item = item.trim().toLowerCase();
    if (!this._history.includes(item)) {
      this._history.unshift(item);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', item);

    this.http
      .get<SearchGifResponse>(
        `${this._baseUrl}/search`, { params }
      )
      .subscribe((response) => {
        console.log(response.data);
        this.results = response.data;
        localStorage.setItem('lastResult', JSON.stringify(this.results));
      });
  };
}
