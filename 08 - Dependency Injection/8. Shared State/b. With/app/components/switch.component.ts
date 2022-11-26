/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'switch',
  template: '<button (click)="handleClick()">Switch color</button>'
})
export class SwitchComponent {
  constructor(private stateService: StateService) {}

  handleClick() {
    this.stateService.switchColor();
  }
}
