import { Component } from '@angular/core';
import { ShoppingCart } from '../type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  products: ShoppingCart[] = [];

  constructor(public router:Router) {
    this.init();
  }

  init() {
    if (localStorage.getItem('shoppingCart')) {
      const shoppingList:ShoppingCart[] = JSON.parse(localStorage.getItem('shoppingCart'));
      this.products = shoppingList;
    }
  }

  addOne(product: ShoppingCart){
    product.quantity += 1;
    const cartList = JSON.parse(localStorage.getItem('shoppingCart'));
    for(let item of cartList){
      if(item.name === product.name){
        item.quantity += 1;
      }
    }
    localStorage.setItem('shoppingCart', JSON.stringify(cartList));
  }

  deleteOne(product: ShoppingCart){
    product.quantity -= 1;

    let cartList = JSON.parse(localStorage.getItem('shoppingCart'));
    if(product.quantity == 0){
      cartList = cartList.filter( item => item.name !== product.name);
      localStorage.setItem('shoppingCart', JSON.stringify(cartList));
      this.init();
    }
    for(let item of cartList){
      if(item.name === product.name){
        item.quantity -= 1;
      }
    }
    localStorage.setItem('shoppingCart', JSON.stringify(cartList));
  }


  deleteProduct(product: ShoppingCart){
    let cartList = JSON.parse(localStorage.getItem('shoppingCart'));
      cartList = cartList.filter( item => item.name !== product.name);
      localStorage.setItem('shoppingCart', JSON.stringify(cartList));
      this.init();
  }

  sum():number {
    let sum = 0;
    this.products.forEach(item => {
      sum += item.price * item.quantity;
    });

    return sum;
  }

  openDetail(productName: string) {
    this.router.navigate(['/detail', productName]);
  }

}
