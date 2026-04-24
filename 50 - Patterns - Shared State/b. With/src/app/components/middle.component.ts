/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { BottomComponent } from './bottom.component';
import { SwitchComponent } from './switch.component';

@Component({
  selector: 'middle',
  imports: [BottomComponent, SwitchComponent],
  template: `
    <bottom />
    <switch />
  `
})
export class MiddleComponent {}
