import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private products:Product[]
  private totalCost: number;

  constructor(private cart:CartService) { }

  ngOnInit() {
    this.initialize();
  }
  deleteProduct(id) {
    this.cart.deleteItem(id);
    this.initialize();
  }

  initialize(){
    this.products = this.cart.getCart();
    this.totalCost = this.cart.totalCartCost();
  }



}
