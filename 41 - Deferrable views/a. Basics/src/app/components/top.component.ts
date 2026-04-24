/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { MiddleComponent } from './middle.component';

@Component({
  selector: 'top',
  imports: [MiddleComponent],
  template: `
    <h1>Top</h1>
    @defer (on timer(5s)) {
      <middle />
    }
  `
})
export class TopComponent {}
