import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Service from '../models/products.service';

@Component({
  selector: 'app-details',
  template: `
    <div
      *ngIf="!product"
      class="spinner-border text-primary"
      role="status"
    ></div>
    <ul *ngIf="product">
      <li class="fs-5 text-primary mt-4">Nome: {{ product.name }}</li>
      <li class="fs-5 text-primary">Prezzo: {{ product.price }} €</li>
      <li class="fs-5 text-primary">Descrizione: {{ product.description }}</li>
    </ul>
  `,
  styles: [],
})
export class DetailsComponent implements OnInit {
  path: string[] = window.location.pathname.split('/');
  product!: Service.Product;

  constructor(private Service: Service.ProductsService,private router: Router) {}

  ngOnInit(): void {
    if(this.Service.products){
      this.product = this.Service.getProductById(Number(this.path[1])) as Service.Product;
    }else{
      this.router.navigate(['']);
    }
  }
}
