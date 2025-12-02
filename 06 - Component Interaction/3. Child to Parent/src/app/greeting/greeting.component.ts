/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'greeting[change]',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  @Output() change = new EventEmitter<string>();

  valueChanged(target: EventTarget | null) {
    const value = (target as HTMLInputElement).value;
    this.change.emit(value);
  }
}
