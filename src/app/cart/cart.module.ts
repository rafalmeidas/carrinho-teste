import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CardModule } from '../shared/card/card.module';



@NgModule({
  declarations: [
    CartComponent,
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class CartModule { }
