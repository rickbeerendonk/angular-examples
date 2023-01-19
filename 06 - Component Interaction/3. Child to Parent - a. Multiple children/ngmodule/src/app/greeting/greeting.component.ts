/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IChangeEvent {
  source: object;
  sourceName?: string;
  value: string;
}

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  @Input() name?: string;

  value: string = 'Hello World!';
  @Output() change = new EventEmitter<IChangeEvent>();

  valueChanged(newValue: string) {
    this.value = newValue;
    this.change.emit({ source: this, sourceName: this.name, value: newValue });
  }
}
