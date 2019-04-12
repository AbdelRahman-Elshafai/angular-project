import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.model';
import { WishlistService } from './services/wishlist.service';
import { CartService } from './services/cart.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	product: Product[];

	constructor(private products:ProductsService,
		 private wishlist:WishlistService,
		 private cart: CartService
		 ){
	}
	
	ngOnInit(){
		this.product = this.products.getProducts();
		this.product.forEach((product) => {
			product.wished = JSON.parse(localStorage.getItem(`${product.id}-wish`)) || false;
			product.purchased = JSON.parse(localStorage.getItem(`${product.id}-purchase`)) || false;
			if(product.wished) this.wishlist.products.push(product);
			if(product.purchased) this.cart.products.push(product);
		});
		this.products.setProducts(this.product);
	}
}
