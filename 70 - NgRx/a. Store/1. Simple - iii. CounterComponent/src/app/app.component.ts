/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app',
  imports: [CounterComponent],
  template: ` <counter></counter> `
})
export class AppComponent {}
