import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [MainPageComponent, SearchComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [MainPageComponent]
})
export class GifsModule { }
