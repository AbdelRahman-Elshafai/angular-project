import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  private cartCounter: number = 0;
  private cart_products: Product[] = [];
  private totalCost: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.initialize();
  }

  deleteProduct(id) {
    this.cart.deleteItem(id);
    this.initialize();
  }

  initialize(){
    this.cart.observable.subscribe(() => this.cartCounter = this.cart.getCartCount());
    this.cart_products = this.cart.getCart();
  }
}
