import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'car-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  private _name: string = '';

  @Input() set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  constructor() {}

  ngOnInit(): void {}


}