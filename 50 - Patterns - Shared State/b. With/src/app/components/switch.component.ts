/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'switch',
  template: '<button (click)="stateService.switchColor()">Switch color</button>'
})
export class SwitchComponent {
  protected readonly stateService = inject(StateService);
}
