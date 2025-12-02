/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  firstArrival$: Observable<Date> = from<Promise<Date>>(
    new Promise(function (resolve /*, reject */) {
      setTimeout(function () {
        resolve(new Date());
      }, 3000);
    })
  );
}
