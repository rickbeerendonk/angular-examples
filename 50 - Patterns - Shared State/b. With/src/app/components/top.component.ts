/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { MiddleComponent } from './middle.component';
import { StateService } from '../services/state.service';

@Component({
  selector: 'top',
  imports: [MiddleComponent],
  template: `
    <middle />
    <button (click)="stateService.switchColor()">Top: Switch color</button>
  `,
  providers: [StateService]
})
export class TopComponent {
  constructor(protected stateService: StateService) {}
}
