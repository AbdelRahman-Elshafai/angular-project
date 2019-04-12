import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { EventEmitter } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ViewPageComponent } from '../view-page/view-page.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @ViewChild(ViewPageComponent) modalHtml: ViewPageComponent;


  
  constructor(
    private wishlistService:WishlistService,
    private cartService:CartService
    
    ) { }

  ngOnInit() {
  }

  onWish(){
    this.wishlistService.addToWishlist(this.product);
  }
  onCart(){
    this.cartService.addToCart(this.product);
  }
}
