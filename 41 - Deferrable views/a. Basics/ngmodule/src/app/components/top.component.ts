/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'top',
  template: `
    <h1>Top</h1>
    @defer (on timer(5s)) {
      <middle />
    }
  `
})
export class TopComponent {}
