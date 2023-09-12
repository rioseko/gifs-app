import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsSearchComponent } from './gifs-search/gifs-search.component';
import { GifsResultComponent } from './gifs-result/gifs-result.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsSearchComponent,
    GifsResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
