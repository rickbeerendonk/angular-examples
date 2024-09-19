/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'top',
  template: `
    <middle />
    <button (click)="stateService.switchColor()">Top: Switch color</button>
  `,
  providers: [StateService]
})
export class TopComponent {
  constructor(protected stateService: StateService) {}
}
