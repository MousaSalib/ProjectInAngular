import { Component } from '@angular/core';
import { ProductCounterService } from '../products/services/product-counter.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  counter = 0;
  constructor(private cartCounter : ProductCounterService) {}
  ngOnInit() {
    this.cartCounter.getCounterVal().subscribe((val) => this.counter = val)
  }
  increment () {
    this.cartCounter.setCounterVal(++this.counter)
  };
  decrement() {
    if(this.counter > 0) {
      this.cartCounter.setCounterVal(--this.counter)
    }

  }
}
