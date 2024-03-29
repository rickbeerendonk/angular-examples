/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  latestArrival$: Observable<Date> = interval(3000).pipe<Date>(
    map(() => {
      return new Date();
    })
  );
}
