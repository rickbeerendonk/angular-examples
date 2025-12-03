/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, DatePipe],

  selector: 'queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  firstArrival: Promise<Date> = new Promise(function (resolve /*, reject */) {
    setTimeout(function () {
      resolve(new Date());
    }, 3000);
  });
}
