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
    if(localStorage.getItem(`${product.id}-purchase`))
    { let count=parseInt(localStorage.getItem(`${product.id}-purchase`))+1;
      console.log(count)
      localStorage.setItem(`${product.id}-purchase`, count.toString());
    }else{
    localStorage.setItem(`${product.id}-purchase`, "1");
    }
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
