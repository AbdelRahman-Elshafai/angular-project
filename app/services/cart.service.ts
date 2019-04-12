import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  private cartCount: number = 0;
  observable: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor() { }

  addToCart(product: Product) {
    this.products.push(product);
    this.observable.next(product.id);
    product.purchased = true;
    localStorage.setItem(`${product.id}-purchase`, "true");
  }

  getCart() {
    return this.products;
  }

  getCartCount() {
    return this.products.length;
  }

  deleteItem(id) {
    this.products.forEach((product) => {
      if (id == product.id) {
        this.products.splice(this.products.indexOf(product), 1);
        localStorage.removeItem(`${product.id}-purchase`);
        product.purchased = false;
      }
    });
    
  }

  totalCartCost(){
    return this.products.reduce((accumulator, current_value) => accumulator + current_value.price, 0);
  }
}
