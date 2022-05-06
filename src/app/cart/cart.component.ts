import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productCartDetails = ['', 0,0];
  public subscription : any;
  counter : number = 2;
  productSinglePrice : number = 0;
  productCombinedPrice : number = 0;

  constructor( private productDataService : ProductDataService) { 
  }

  ngOnInit(): void {
    this.subscription = this.productDataService.getDetails().subscribe(msg => {
      console.log("Received new quantity : "+msg);
      this.productCartDetails = msg;
      this.productSinglePrice = msg[2];
      this.productCombinedPrice = msg[1] * msg[2];
      this.counter = msg[1];
      console.log("product combined price : " + this.productCombinedPrice);
    });
  }

  changeQty(counterType : string) {
    if(counterType === "add") {
      this.counter++;
      this.productCombinedPrice += this.productSinglePrice;

    }
    else {
      if(this.counter == 1)
        return;
      this.counter--;
      this.productCombinedPrice -= this.productSinglePrice;
    }
  }

}
