/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'middle',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <h1>Middle</h1>

    <hr />

    <bottom [obj]="obj"></bottom>
  `
})
export class MiddleComponent {
  @Input() obj: object;
}
