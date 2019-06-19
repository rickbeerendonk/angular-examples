/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'timestamp',
  template: `
    <h1>Generated on <span [innerText]="getDateTime()"></span>!</h1>
  `
})
export class TimeStampComponent {
  getDateTime() {
    return new Date().toString();
  }
}
