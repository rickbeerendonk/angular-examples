/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { BottomComponent } from './bottom.component';

@Component({
  selector: 'middle',
  imports: [BottomComponent],
  template: `
    <h2>Middle</h2>
    <bottom />
  `
})
export class MiddleComponent {}
