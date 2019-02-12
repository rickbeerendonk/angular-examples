/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'queue',
  template: `
    <h1>Queue</h1>
    <p>Latest arrival: {{ latestArrival | async | date: 'HH:mm:ss' }}</p>
  `
})
export class QueueComponent {
  latestArrival: Observable<Date> = interval(3000).pipe<Date>(
    map(() => {
      return new Date();
    })
  );
}
