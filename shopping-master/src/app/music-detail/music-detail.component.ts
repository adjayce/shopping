import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicsService } from '../musics.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  id: number;
  private sub: any;
  music: object = null;
  largeDisplayImg: string;
  cart: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicsService: MusicsService,
    private cartService: CartService
    ) {

  }

  ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.musicsService.getMusics()
      .subscribe(res => {
        // get specific music according to id from DB
        debugger
        let tmpObj = res.json();
        Object.keys(tmpObj).forEach( key => {
          if (tmpObj[key].id === this.id) {

            this.music = tmpObj[key];

            console.log(this.music['quantity'])
            this.largeDisplayImg = this.music['images'][0];
            return;
          }
        });

      });
    });
  }

  switchedDisplayImg(idx) {
    this.largeDisplayImg = this.music['images'][idx];
  }

  addToCart(music) {
    // debugger
      this.cartService.addProductToCart(music);
      this.cartService.addToCart(true);

      // console.log('dsffddfsffsdsdfsfdsdf');
      // console.log(this.cart);
  }
}



// addToCart(music) {
//   // debugger
//   if (music.quantityInput < music.quantity) {
//     this.cartService.addProductToCart(music);
//     this.cartService.addToCart(true);
//     // console.log(this.cartService.getCart());
//   }
// }
// }



// if (this.quantityInput < this.music['quantity']) {
//   this.quantityInput++;
//   this.cartService.addProductToCart(this.music);
//   this.cartService.changeQuantity(true);
// }
