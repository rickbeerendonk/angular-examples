/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app',
  imports: [TimerComponent],
  template: `
    <timer (tick)="onTick($event)" />
    <p>Ticks received: {{ count }}</p>
  `
})
export class AppComponent {
  count = 0;

  onTick(value: number) {
    this.count = value + 1;
  }
}
