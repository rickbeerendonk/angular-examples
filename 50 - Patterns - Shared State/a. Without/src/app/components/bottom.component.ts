/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'bottom',
  template: `<h1 [style.color]="color">Bottom</h1>`
})
export class BottomComponent {
  @Input() color?: string;
}
