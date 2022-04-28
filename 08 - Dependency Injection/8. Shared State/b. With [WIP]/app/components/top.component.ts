/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'top',
  template: `
    <middle></middle>
    <switch></switch>
  `,
  providers: [StateService]
})
export class TopComponent {
  color = 'red';
  constructor(stateService: StateService) {
    stateService.color = this.color;
    stateService.switch.subscribe(() => {
      this.color = this.color === 'red' ? 'green' : 'red';
      stateService.color = this.color;
    });
  }
}
