/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  Component,
  input,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'bottom',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <h1>Bottom</h1>
    <p>Text received: {{ obj?.text }}</p>
  `
})
export class BottomComponent {
  @Input() obj?: { text: string };
}
