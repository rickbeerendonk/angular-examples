/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2025 Rick Beerendonk     !*/

import { Component, output } from '@angular/core';

@Component({
  selector: 'greeting[change]',
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  change = output<string>();

  valueChanged(target: HTMLInputElement) {
    this.change.emit(target.value);
  }
}
