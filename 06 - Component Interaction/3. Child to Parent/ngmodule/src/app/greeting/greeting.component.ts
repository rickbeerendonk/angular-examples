/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  value: string = 'Hello World!';
  @Output() change = new EventEmitter<string>();

  valueChanged(target: EventTarget | null) {
    this.value = (target as HTMLInputElement).value;
    this.change.emit(this.value);
  }
}
