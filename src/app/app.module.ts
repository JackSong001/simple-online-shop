import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { ProductsService } from './products.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegitrationComponent } from './regitration/regitration.component';
import { LoginComponent } from './login/login.component';
import { UserEditingComponent } from './user-editing/user-editing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCartComponent,
    RegitrationComponent,
    LoginComponent,
    UserEditingComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
