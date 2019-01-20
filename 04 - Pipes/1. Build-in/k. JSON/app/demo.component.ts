/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <p>{{ person | json }}</p>
  `
})
export class DemoComponent {
  person: Object = {
    name: 'Jan Jansen',
    dob: new Date(1951, 11, 24),
    retired: true,
    children: 3
  };
}
