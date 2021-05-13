import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ItemListModule } from './item-list/item-list.module';
import { CardModule } from './shared/card/card.module';
import { ButtonModule } from './shared/button/button.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    ItemListModule,
    CardModule,
    ButtonModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
