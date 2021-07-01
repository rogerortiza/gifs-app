import { Component, OnInit } from '@angular/core';
import {GifsService} from '../services/gifs.service';
import {Gif} from '../gif-interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {
  }

  get result(): Gif[] {
    return this.gifService.result;
  }

}
