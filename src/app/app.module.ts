import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CartComponent } from './components/cart.component';
import { DetailsComponent } from './components/details.component';


const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: DetailsComponent },
  { path: 'cart/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, CartComponent, DetailsComponent],
  imports: [BrowserModule,   ReactiveFormsModule,  FormsModule, AppRoutingModule,[RouterModule.forRoot(routes)],HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
