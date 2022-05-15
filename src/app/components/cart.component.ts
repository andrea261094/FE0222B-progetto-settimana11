import { Component, OnInit } from '@angular/core';
import * as Service from '../models/products.service';



@Component({
  template: `
<form action="" id="myForm">
    <h2 *ngIf="cart.length == 0">Il tuo Carrello è Vuoto, acquista un prodotto!</h2>
    <h2 *ngIf="cart.length != 0">Il tuo Carrello</h2>
    <ul class="list-group">
      <li *ngFor="let product of cart" class="list-group-item">
        {{ product.name }}
        <div class="position-absolute end-0 top-0 me-3 pt-2">
          <a href="#" class="ms-2" [routerLink]="['', product.id]">
            Dettagli
          </a>
          <span class="badge rounded-pill bg-primary ms-3">
            {{ product.price }} €
          </span>
        </div>
      </li>
    </ul>
    <div *ngIf="cart.length != 0">
      <hr />
      <h3>Totale: {{ total }} €</h3>
      <hr />
      <div class="mb-3">
        <label for="username" class="form-label"> Nome e Cognome </label>
        <input type="text" class="form-control" id="username" />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label"> Indirizzo </label>
        <input type="text" class="form-control" id="address" />
      </div>
      <button (click)="svuotaCarrello()" class="btn btn-success">Acquista Ora!</button>
    </div>
    </form>
  `,
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Service.Product[] = this.Service.cart;
  total: number = this.sumProductPrices();

  constructor(private Service: Service.ProductsService) {}

  ngOnInit(): void {}

  sumProductPrices(): number {
    let sum: number = 0;
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].price;
    }
    return sum;
  }
  svuotaCarrello() {
    alert("Acquisto effettuato!");
    this.cart= []

}


}
