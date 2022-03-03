/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'bottom',
  template: `<h1 [style.color]="color">Bottom</h1>`
})
export class BottomComponent {
  @Input() color: string;
}
