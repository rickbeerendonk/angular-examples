/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'queue',
  template: `
    <h1>Queue</h1>
    <p>First arrival: {{ firstArrival | async | date: 'HH:mm:ss' }}</p>
  `
})
export class QueueComponent {
  firstArrival: Promise<Date> = new Promise(function(resolve /*, reject */) {
    setTimeout(function() {
      resolve(new Date());
    }, 3000);
  });
}
