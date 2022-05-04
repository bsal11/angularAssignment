import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent implements OnInit {
  quantity : number = 1;
  cartButtonText : string = '+ Add to Cart';
  goToCartFlag : boolean = false;
  isActiveImg1 : boolean = true;
  isActiveImg2 : boolean = false;
  isActiveColor1 : boolean = false;
  isActiveColor2 : boolean = false;
  isActiveColor3 : boolean = false;
  isActiveImgCounter : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  productDetails = {
    productName : "Modern Ergonomic Rocking Chair with Cushion Foam 1 Seater",
    discountPrice : 20399,
    originalPrice : 26489,
    fixedDiscountPrice : 20399,
    fixedOriginalPrice : 26489,
    woodType : [{img:"/assets/images/Ellipse 11.png", isActive:false},{ img:"/assets/images/Ellipse 12.png", isActive:false}],
    colorType : ["#A8875F", "#283B4A", "#AF9383"],
    aboutProduct : [] = [
      "Ergonomic designed curve suits human being structure perfectly, providing maximum comfort",
      "Load capacity: 200kg, please see the size photo on the left table in detail",
      "Ideal for dining room, balcony, garden or other outdoor occasions.",
      "Well padded seat of ergonomic shape with backrest and armrest provides a exceptionally comfortable, relaxing, and enjoyable place to sit",
      "It has a gentle rocking effect which helps nursing your baby, relaxing or just enjoying some time together"
    ],
    generalInfo : [] = ["8QERH7602","1 Seater","Seating, Outdoor & Cafeteria, Living Room","Yes","Yes","No","Rocking Chairs","Natural","Pre-assembled",
      "Wipe gently with medium wet cloth"
    ],
    generalInfoTitle : [] = [
      "Model Number", "Seating Capacity", "Suitable For", "Armrest", "Upholstery", "Footrest", "Type", "Finish Type",
      "Delivery Condition", "Care Instructions"
    ],
    materialsAndColors : [] = [
      ["Primary Material", "Foam"],
      ["Primary Material(Sub)", "Cotton"],
      ["Secondary Material", "Solid Wood"],
      ["Secondaryn Material(Sub)", "Cotton"],
      ["Primary Colour", "Grey"],
      ["Finish Colour", "Grey"],
      ["Upholstery Colour", "Grey"]
    ],
    dimensions : [] = [
      ["Width", "40 mm"],
      ["Height", "24 mm"],
      ["Depth", "37 mm"],
      ["Weight", "14 kg"]
    ]
  }

  

  
  changeQty(type : string) {
    if(type === 'add') {
      this.quantity++;
      this.productDetails.originalPrice += this.productDetails.fixedOriginalPrice;
      this.productDetails.discountPrice += this.productDetails.fixedDiscountPrice;
    } else if(type == 'minus') {
      if(this.quantity == 1)
        return;
      this.quantity--;
      this.productDetails.originalPrice -= this.productDetails.fixedOriginalPrice;
      this.productDetails.discountPrice -= this.productDetails.fixedDiscountPrice;
    }
  }

  changeToGoToCart() {
    this.cartButtonText = 'Go to Cart';
    if(this.goToCartFlag == false) 
      this.goToCartFlag = true;
  }

  highlightWoodType(index:number) {
    // this.isActiveImg1 = !this.isActiveImg1;
    this.productDetails.woodType[index].isActive = true;
    for(let i = 0; i<this.productDetails.woodType.length; i++)
      if(i != index)
        this.productDetails.woodType[i].isActive = false;
    console.log(index);
  }


}
