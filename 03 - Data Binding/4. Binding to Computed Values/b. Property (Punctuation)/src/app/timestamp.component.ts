/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'timestamp',
  template: '<h1 [title]="getDateTime()">Hover to see the generated time</h1>'
})
export class TimeStampComponent {
  getDateTime() {
    return new Date().toString();
  }
}
