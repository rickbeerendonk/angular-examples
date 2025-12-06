/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';
import { BottomComponent } from './bottom.component';

@Component({
  selector: 'middle',
  imports: [BottomComponent],
  template: '<bottom [color]="color()" />'
})
export class MiddleComponent {
  color = input<string>();
}
