/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  // Reverse order to show output is by default in alphanumerical ascending order.
  map = new Map<String, String | Number | Boolean>([
    ['second', 444],
    ['first', 'Three'],
    [null, 222],
    [undefined, true]
  ]);

  compareDesc = (
    a: { key: string; value: any },
    b: { key: string; value: any }
  ) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
}
