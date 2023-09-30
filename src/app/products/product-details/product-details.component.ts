
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interface/products';
import productsListJson from '../../../assets/products-list.json';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  activeId: number = 0;
  productsL: Products[] = productsListJson;
  foundProduct: Products | undefined;

  constructor(private activatedRouter: ActivatedRoute, private productService: DataService) {}

  ngOnInit() {
    this.activeId = +this.activatedRouter.snapshot.params["id"];
    this.foundProduct = this.productsL.find(product => product.id === this.activeId);
    this.productService.getProductDetails(this.activeId).subscribe((res) => console.log(res))
  }
}






