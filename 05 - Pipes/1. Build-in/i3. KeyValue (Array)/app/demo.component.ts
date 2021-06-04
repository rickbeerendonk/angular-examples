/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  arr = [1, 22, 333, 4444];

  compareDesc = (a: KeyValue<string, any>, b: KeyValue<string, any>) => {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  };
}
