import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.scss"]
})
export class WishlistComponent implements OnInit {
  

  wishlistCounter: number = 0;
  wishlist_products: Product[] = [];
  
  constructor(
    private wishlist:WishlistService,
    private cart:CartService,
    private router:Router
    ) {}

  ngOnInit() {
    this.initialize();
  }

  deleteProduct(id) {
    this.wishlist.deleteWish(id);
    this.initialize();
  }

  initialize() {
    this.wishlist.observable.subscribe(() => this.wishlistCounter = this.wishlist.getWishlistCount());
    this.wishlist_products = this.wishlist.getWishlist();
  }

  addToCart(product){
    this.cart.addToCart(product);
    this.deleteProduct(product.id);
  }
}
