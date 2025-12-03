/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable, Observer } from 'rxjs';

@Component({
  imports: [AsyncPipe, DatePipe],

  selector: 'queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  latestArrival$ = new Observable<Date>((observer: Observer<Date>) => {
    setInterval(() => observer.next(new Date()), 3000);
  });
}
