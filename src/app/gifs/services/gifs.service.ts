import { Gif } from './../interfaces/gifs.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchGifResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private _apiKey: string = 'K1TP3l79EczJc8bIdzij54BJ5MZ5o5Jd';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
      
      this._history = JSON.parse(localStorage.getItem('history')!) || [];
  }

  get history() {
    return [...this._history];
  }

  addHistory = (item: string = ''): void => {
    item = item.trim().toLowerCase();
    if (!this._history.includes(item)) {

      this._history.unshift(item);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }
    console.log(this.history);
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=K1TP3l79EczJc8bIdzij54BJ5MZ5o5Jd&q=DBZ&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //     })
    //   })
    this.http
      .get<SearchGifResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=K1TP3l79EczJc8bIdzij54BJ5MZ5o5Jd&q=${item}&limit=10`
      )
      .subscribe((response) => {
        console.log(response.data);
        this.results = response.data;
      });
  };
}
