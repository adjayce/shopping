import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  price: number = 0;
  @Input('music') music: object;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }

  @Input('quantityInput') quantityInput: number;
  handleMinusClick() {
    console.log(this.quantityInput);
    if (this.quantityInput > 0) {
      this.quantityInput--;
      this.cartService.minusProductFromCart(this.music);
      this.cartService.changeQuantity(true);
    }
  }

  handlePlusClick() {
    console.log(this.quantityInput)
    if (this.quantityInput < this.music['quantity']) {
      this.quantityInput++;
      this.cartService.addProductToCart(this.music);
      this.cartService.changeQuantity(true);
    }
  }
}
