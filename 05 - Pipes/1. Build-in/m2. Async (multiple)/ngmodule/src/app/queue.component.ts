/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  latestArrival$ = new Observable<Date>((observer: Observer<Date>) => {
    setInterval(() => observer.next(new Date()), 3000);
  });
}
