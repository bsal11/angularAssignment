import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';

const routes: Routes = [
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path : 'home',
    component : ProductDetalisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
