/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
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
