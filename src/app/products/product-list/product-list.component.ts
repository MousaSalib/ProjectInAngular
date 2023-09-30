
// import productsListJson from "../../../assets/products-list.json"
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
 import { Products } from 'src/app/interface/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cartProducts: any[] = [] //added
  productsL: Products[] = [];
  constructor(private productService: DataService, private router : Router) {}
  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => {
      if (data && data.products) {
        this.productsL = data.products;
      } else {
        console.error('Invalid data format: ', data);
      }
    });
  }
   goToDetails(id: number) {
     this.router.navigate(['product-details', id])
   }
   addButton: boolean = false;

  // addToCart(product: any) {
  //   let cartProducts: any[] = [];

  //   if ("cart" in localStorage) {
  //     cartProducts = JSON.parse(localStorage.getItem("cart")!);
  //     const existingProduct = cartProducts.find(item => item.id == product.id);

  //     if (existingProduct) {
  //       existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  //     } else {
  //       product.quantity = 1;
  //       cartProducts.push(product);
  //     }
  //   } else {
  //     product.quantity = 1;
  //     cartProducts.push(product);
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cartProducts));
  // }
  addToCart(product: any) {
    let cartProducts: any[] = [];

    if ("cart" in localStorage) {
      cartProducts = JSON.parse(localStorage.getItem("cart")!);
      const existingProduct = cartProducts.find(item => item.id == product.id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity; // Update total price
      } else {
        product.quantity = 1;
        product.totalPrice = product.price; // Initialize total price
        cartProducts.push(product);
      }
    } else {
      product.quantity = 1;
      product.totalPrice = product.price; // Initialize total price
      cartProducts.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cartProducts));
    alert('Product added successfully, and the delete from cart');
  }










}




