/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'bottom',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <h1>Bottom</h1>
    <p>Text received: {{ obj()?.text }}</p>
  `
})
export class BottomComponent {
  obj = input<{ text: string }>();
}
