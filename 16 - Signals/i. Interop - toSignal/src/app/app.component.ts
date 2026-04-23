/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Observable -> Signal. Subscribes in injection context,
  // unsubscribes automatically on destroy.
  counter = toSignal(interval(1000), { initialValue: 0 });
}
