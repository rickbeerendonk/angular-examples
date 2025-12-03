/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  imports: [KeyValuePipe],

  selector: 'demo',
  template: `
    <h1>Build-in</h1>

    <h2>KeyValue</h2>
    <ul>
      @for (entry of obj | keyvalue; track entry.key) {
        <li>{{ entry.key }}: {{ entry.value }}</li>
      }
    </ul>
  `
})
export class DemoComponent {
  obj = { a: 1, b: 2, c: 3 };
}
