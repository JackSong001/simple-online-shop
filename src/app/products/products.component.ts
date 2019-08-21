import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ShoppingCart} from '../type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];



  constructor(private router: Router, private service: ProductsService) {
    service.getProducts().subscribe( val => {
      this.products = val;
    });
  }

  ngOnInit() {
  }

  openDetail(productName: string) {
    this.router.navigate(['/detail', productName]);
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
