import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'car-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = '';
  @Input() value: string = '';
  @Input() discount: string = '';
  @Input() url: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
