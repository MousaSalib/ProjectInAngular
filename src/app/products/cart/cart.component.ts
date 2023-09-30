
// import { ProductCounterService } from '../services/product-counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() {}

  count = 0;
  cartProducts: any[] = [];

  ngOnInit(): void {
    this.getCartProducts();

  }

  getCartProducts(): void {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    console.log(this.cartProducts);
  }
  
  deleteItem(index: number): void {
    if (index >= 0 && index < this.cartProducts.length) {
      const item = this.cartProducts[index];
      if (item.quantity > 0) {
        item.quantity -= 1;
        item.totalPrice = item.price * item.quantity;
      }
      if (item.quantity === 0) {
        this.cartProducts.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(this.cartProducts));  // Update local storage
    }
  }

}












