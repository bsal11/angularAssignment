import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';

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
  cartUrl : string  = '/home';

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 3};
  slides = ["/assets/images/FImg1.png", "/assets/images/FImg2.png", "/assets/images/FImg3.png", "/assets/images/FImg4.png"];
  constructor( private productDataService : ProductDataService) { }

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
    generalInfo : [] = [
      ["Model Number", "8QERH7602"],
      ["Seating Capacity","1 Seater"],
      ["Suitable For","Seating, Outdoor & Cafeteria, Living Room"],
      ["Armrest","Yes"], 
      ["Upholstery","Yes"], 
      ["Footrest","No"], 
      ["Type","Rocking Chairs"], 
      ["Finish Type","Natural"],
      ["Delivery Condition","Pre-assembled"], 
      ["Care Instructions","Wipe gently with medium wet cloth"]
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
    ], 
    disclaimer : [] = [
      "The color of the product may vary slightly compared to the picture displayed on your screen. This is due to lighting, pixel quality and color settings",
      "Please check the product's dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises",
      "Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels",
      "Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled in case carpentry assembly is required",
      "In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles"
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
    this.updateCart();
  }

  changeToGoToCart() {
    if(this.goToCartFlag == false) { 
      this.goToCartFlag = true;
      this.cartButtonText = 'Go to Cart';
    } else {
      this.cartUrl = '/cart';
    }
  }

  highlightWoodType(index:number) {
    // this.isActiveImg1 = !this.isActiveImg1;
    this.productDetails.woodType[index].isActive = true;
    for(let i = 0; i<this.productDetails.woodType.length; i++)
      if(i != index)
        this.productDetails.woodType[i].isActive = false;
    console.log(index);
  }

  public updateCart() : void {
    console.log("Update Cart : "+this.quantity);
    this.productDataService.updateDetails([this.productDetails.productName, this.quantity,this.productDetails.fixedDiscountPrice]);
  }

}
