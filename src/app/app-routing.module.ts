import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './products/cart/cart.component';

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: "product-card",
    component: ProductCardComponent
  },
  {
    path: "product-details/:id",
    component: ProductDetailsComponent
  },
  {
    path: "login",
    component: LogInComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
