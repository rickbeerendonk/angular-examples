/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateService } from '../services/state.service';

@Component({
  selector: 'bottom',
  template: `<h1 [style.color]="color">Bottom</h1>`
})
export class BottomComponent implements OnDestroy {
  color?: string;
  stateServiceSubscription: Subscription;

  constructor(stateService: StateService) {
    this.color = stateService.color;
    this.stateServiceSubscription = stateService.onChange.subscribe(() => {
      this.color = stateService.color;
    });
  }

  ngOnDestroy() {
    this.stateServiceSubscription.unsubscribe();
  }
}
