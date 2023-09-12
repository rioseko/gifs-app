import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-result',
  templateUrl: './gifs-result.component.html',
  styles: [
  ]
})
export class GifsResultComponent {

  get results() {
    return this.gifsService.results;
  }
  constructor(private gifsService: GifsService) { }

}
