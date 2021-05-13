import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { CardModule } from '../shared/card/card.module';
import { ButtonModule } from '../shared/button/button.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
  imports: [CommonModule, CardModule, ButtonModule, CartModule],
})
export class ItemListModule {}
