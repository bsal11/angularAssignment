import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  public productDetails = new BehaviorSubject<[string,number,number]>(['',0,0]);
  constructor() { }

  public getDetails() : Observable<[string,number,number]> {
    return this.productDetails.asObservable();
  }

  public updateDetails(details : [string,number,number]) : void {
    console.log("Update Service : "+details);
    this.productDetails.next(details);
  } 

}
