import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { Products } from 'src/app/interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductCounterService {
  private counter;
  constructor() {
    this.counter = new BehaviorSubject<number>(0);
  }
  getCounterVal() {
    return this.counter.asObservable();
  }
  setCounterVal(newVal: number) {
    this.counter.next(newVal)
  }
  // addTocart(dat: Products) {

  // }
}
