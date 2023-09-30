import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {}
  getProductList() {
    return this.http.get("https://dummyjson.com/products", {
      params:{
        id: 2
      },
      headers: {
        "Autherization": "token lab lab lala"
      }
    })
  }
  getProductDetails(id : number) {
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
