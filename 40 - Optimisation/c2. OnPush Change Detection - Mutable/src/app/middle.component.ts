/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { BottomComponent } from './bottom.component';

@Component({
  selector: 'middle',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <h1>Middle</h1>

    <hr />

    <bottom [obj]="obj()" />
  `,
  imports: [BottomComponent]
})
export class MiddleComponent {
  obj = input({ text: '' });
}
