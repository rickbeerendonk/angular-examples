/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  person: Object = {
    name: 'Jan Jansen',
    dob: new Date(1951, 11, 24),
    retired: true,
    children: 3
  };
}
