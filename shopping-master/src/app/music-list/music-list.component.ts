import { Component, OnInit } from '@angular/core';
import { MusicsService } from '../musics.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musics = [];
  query: string = '';
  orderProp: string = 'name';
  searchableList = ['name'];
  constructor(private musicsService: MusicsService) {

    this.musicsService.getMusics()
      .subscribe(res => {
        console.log(res);
        this.musics = res.json();
        console.log(res.json());
      })
  }
  ngOnInit() {
  }
}
