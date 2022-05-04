import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter : number = 2;
  changeQty(counterType : string) {
    if(counterType === "Add")
      this.counter++;
    else
      this.counter--;
  }

}
