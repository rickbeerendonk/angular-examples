/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'top',
  template: `
    <middle [color]="color"></middle>
    <switch (switch)="handleSwitch()"></switch>
  `,
  providers: [StateService]
})
export class TopComponent {
  color = 'red';
  constructor(private stateService: StateService) {
    stateService.color = this.color;
    stateService.switch = () =>
      (his.color = this.color === 'red' ? 'green' : 'red');
  }
  color = 'red';
  handleSwitch() {
    this.color = this.color === 'red' ? 'green' : 'red';
  }
}
