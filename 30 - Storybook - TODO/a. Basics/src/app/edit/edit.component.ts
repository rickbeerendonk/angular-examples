/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'edit',
  template: '<input [value]="value()" (keyup)="handleInput($event)">',
  styles: []
})
export class EditComponent {
  value = input<string>();

  change = output<string>();

  handleInput(event: KeyboardEvent) {
    this.change.emit((<HTMLInputElement>event.target).value);
  }
}
