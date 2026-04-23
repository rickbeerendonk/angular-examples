/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'timer',
  template: `<p>Timer running...</p>`
})
export class TimerComponent {
  // Bridges an Observable into a function-based output
  tick = outputFromObservable(interval(1000));
}
