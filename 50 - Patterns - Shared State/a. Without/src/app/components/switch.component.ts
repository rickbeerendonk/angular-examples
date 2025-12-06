/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, output } from '@angular/core';

@Component({
  selector: 'switch',
  template: '<button (click)="handleClick()">Switch</button>'
})
export class SwitchComponent {
  switch = output();

  handleClick() {
    this.switch.emit();
  }
}
