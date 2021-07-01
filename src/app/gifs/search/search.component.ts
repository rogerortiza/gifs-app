import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GifsService} from "../services/gifs.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('textSearch') textSearch: ElementRef;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  searchGif(): any {
    const value = this.textSearch.nativeElement.value;
    this.gifsService.searchGifs(value);
    this.textSearch.nativeElement.value = '';
}

}
