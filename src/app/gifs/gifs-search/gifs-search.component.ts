import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styles: [],
})
export class GifsSearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  constructor(private service: GifsService) {}

  search = (): void => {
    const value = this.txtSearch.nativeElement.value;
    if(value.trim().length !== 0) {
      this.service.addHistory(value);
      this.txtSearch.nativeElement.value = '';
    }
  };
}
