import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ItemListModule } from './item-list/item-list.module';
import { CardModule } from './shared/card/card.module';
import { ButtonModule } from './shared/button/button.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, HeaderModule, ItemListModule, CardModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
