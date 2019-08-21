import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegitrationComponent} from './regitration/regitration.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'register', component: RegitrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:name', component: ProductDetailComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
