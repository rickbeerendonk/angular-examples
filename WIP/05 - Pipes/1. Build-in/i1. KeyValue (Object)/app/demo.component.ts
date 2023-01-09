/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  obj = {
    // Reverse order to show output is by default in alphanumerical ascending order.
    prop3: 333,
    prop2: 'Two',
    prop1: true
  };

  compareDesc = (a: KeyValue<string, any>, b: KeyValue<string, any>) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
}
