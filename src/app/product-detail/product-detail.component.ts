import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import {Product, ShoppingCart} from '../type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private service: ProductsService) {
  }

  ngOnInit() {
    this.route.params.subscribe( param => {
      this.service.getOneProduct(param.name).subscribe( prod => {
        this.product = prod;
        console.log(this.product);
      });
    });
  }

  addCart(p: Product) {

    const cartList: ShoppingCart[] = JSON.parse(localStorage.getItem('shoppingCart'));

    if (cartList && cartList.length > 0) {
      const index = cartList.find( item => item.name == p.name);
      if(!index){
        const q: ShoppingCart = {
          name: p.name,
          quantity: 1,
          price: p.price,
          img: p.img
        }
        cartList.push(q);
        localStorage.setItem('shoppingCart', JSON.stringify(cartList));
      }else{
        for(let item of cartList){
          if(item.name === p.name){
            item.quantity += 1;
          }
        }
        localStorage.setItem('shoppingCart', JSON.stringify(cartList));
      }

    } else {
      const q: ShoppingCart = {
        name: p.name,
        quantity: 1,
        price: p.price,
        img: p.img
      }
      localStorage.setItem('shoppingCart', JSON.stringify([q]));
    }
  }

}
