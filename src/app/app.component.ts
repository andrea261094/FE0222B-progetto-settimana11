import { Component } from '@angular/core';
import * as Service from './models/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cart: Service.Product[] = this.Service.cart;
  title = 'ProgettoS11';
  constructor(private Service: Service.ProductsService){}
}
