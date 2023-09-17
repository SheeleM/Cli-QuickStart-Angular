import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  //El addToCart()método agrega un producto a una matriz deitems
  addToCart(product: Product) {
    this.items.push(product);
  }
 //recopila los artículos que los usuarios agregan al carrito y devuelve cada artículo con su cantidad asociada.
  getItems() {
    return this.items;
  }
//devuelve una serie vacía de artículos, lo que vacía el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
