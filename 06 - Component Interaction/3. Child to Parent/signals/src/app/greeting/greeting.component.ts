/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, output } from '@angular/core';

@Component({
  selector: 'greeting[change]',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  change = output<string>();

  valueChanged(target: EventTarget | null) {
    const value = (target as HTMLInputElement).value;
    this.change.emit(value);
  }
}
