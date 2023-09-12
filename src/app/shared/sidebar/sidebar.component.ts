import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  get history() {
    return this.service.history;
  }
  constructor(private service: GifsService) { 
  }

  sidebarSearch = (item: string): void => this.service.searchGifs(item);

}
