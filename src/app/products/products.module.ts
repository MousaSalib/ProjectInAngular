import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CartComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductsModule { }
