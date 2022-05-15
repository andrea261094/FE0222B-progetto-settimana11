import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products!: Product[]
  productsLoaded: Subject<Product[]> = new Subject<Product[]>()
  cart:Product[] = [];

  constructor(private http: HttpClient) {}

  fetchProducts() {
      this.http
      .get('http://localhost:4201/products')
      .subscribe((products) => {
        this.productsLoaded.next(products as Product[])
        this.products = products as Product[];
      });
  }

  getProductById(id:number){
    return this.products.find(x => x.id === id) as Product
  }

  svuotaCarrello() {
    this.cart = [];
  }

}
