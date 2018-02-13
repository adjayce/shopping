import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class  MusicsService {
  musicUrl = 'http://localhost:8088/music';
  constructor(private http: Http) {  }
  getMusics() {
    return this.http.get(this.musicUrl);
  }

  updateMusics(music, purchasedQuantity) {
    return this.http.put(this.musicUrl + '/update', {
      name: music['name'],
      quantity: music['quantity'] - purchasedQuantity
    });
  }
}
