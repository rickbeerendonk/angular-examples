/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { StateService } from '../services/state.service';

@Component({
  selector: 'bottom',
  template: `<h1 [style.color]="stateService.color">Bottom</h1>`
})
export class BottomComponent {
  protected readonly stateService = inject(StateService);
}
