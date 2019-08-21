import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from './type';


const dummyData: Product[] = [
  {name: 'Red Apple', img: 'apple.jpeg', price: 1.6, desc: 'This apple is from Florida', productId: 10},
  {name: 'Green Apple', img: 'green apple.jpeg', price: 2.2, desc: 'This is local green apple', productId: 2},
  {name: 'Banana', img: 'banana.jpeg', price: 0.55, desc: 'Theses bananas are from California', productId: 3},
  {name: 'Orange', img: 'orange.jpeg', price: 1.4, desc: 'Oranges are from New Jersey', productId: 6},
  {name: 'Pear', img: 'pear.jpeg', price: 1.1, desc: 'Pears are local', productId: 8},
  {name: 'Pomegranate', img: 'pomegranate.jpeg', price: 2.8, desc: 'Pomegranate is from Georgia', productId: 1},
  {name: 'Watermalon', img: 'watermalon.jpeg', price: 3, desc: 'Watermalon is from Florida', productId: 9},
  {name: 'Grapes', img: 'grapes.jpeg', price: 1.7, desc: 'grapes is from Florida', productId: 11},
  {name: 'Lemon', img: 'lemon.jpeg', price: 1, desc: 'lemon is from Florida', productId: 22},
  {name: 'Mango', img: 'magon.jpeg', price: 3.7, desc: 'mango is from Florida', productId: 91},
  {name: 'Peaches', img: 'peaches.jpeg', price: 2.3, desc: 'peaches is from Florida', productId: 15},
  {name: 'Pinaple', img: 'pinple.jpeg', price: 1.6, desc: 'pinaple is from Florida', productId: 91},
  {name: 'Strawberry', img: 'strawberry.jpeg', price: 1.6, desc: 'strawberry is from Florida', productId: 0},
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(dummyData);
  }

  getOneProduct(name: string): Observable<Product> {
     return of(dummyData.filter(product => product.name === name)[0]);
  }

}
