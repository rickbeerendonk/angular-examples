/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  imports: [AsyncPipe, DatePipe],

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
