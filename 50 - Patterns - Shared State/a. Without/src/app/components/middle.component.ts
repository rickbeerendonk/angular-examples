/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input, Input } from '@angular/core';

@Component({ selector: 'middle', template: '<bottom [color]="color" />' })
export class MiddleComponent {
  @Input() color?: string;
}
