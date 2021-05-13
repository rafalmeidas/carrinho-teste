import { Component, OnInit } from '@angular/core';
import { capitalize } from 'src/util/formatter';
import { getItems } from '../services/api.service';

export interface ItemsList {
  id: number;
  name: string;
  value: string;
  price: string;
  sellingPrice: string;
  imageUrl: string;
}

export interface ItemsCart {
  id: number;
  name: string;
  value: string;
  sellingPrice: string;
  qtde: number;
}

@Component({
  selector: 'car-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  class: string = '';
  items: ItemsList[] = [];

  cartList: ItemsCart[] = [];
  index: number[] = [];

  total: number = 0;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.items = await getItems();
    this.front(this.items);
    this.class = 'fa fa-plus fa-3x';
  }

  addToCartList(id: number, name: string, value: string, sellingPrice: string) {
    if (this.index.length > 0 && this.index.includes(id)) {
      this.cartList.map((item) => {
        if (item.id == id) {
          item.qtde++;
        }
      });
    } else {
      this.index.push(id);
      let qtde = 1;
      let item: ItemsCart = { id, name, value, sellingPrice, qtde };
      this.cartList.push(item);
    }
  }
 
  front(items: ItemsList[]) {
    console.log(items);
    
    items.map(item => {
      item.name = capitalize(item.name);
      item.value = item.value;
      item.price = item.price;
      item.sellingPrice = item.sellingPrice;
    });
    return items;
  }
}
