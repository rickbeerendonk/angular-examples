/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { KeyValuePipe, NgForOf } from '@angular/common';

@Component({
  imports: [NgForOf, KeyValuePipe],

  selector: 'demo',
  template: `
    <h1>Build-in</h1>

    <h2>KeyValue</h2>
    <ul>
      <li *ngFor="let entry of obj | keyvalue">
        {{ entry.key }}: {{ entry.value }}
      </li>
    </ul>

    <h1>Custom</h1>

    <h2>Entries</h2>
    <ul>
      <li *ngFor="let entry of obj | entries">{{ entry }}</li>
    </ul>

    <h2>Keys</h2>
    <ul>
      <li *ngFor="let key of obj | keys">{{ key }}</li>
    </ul>

    <h2>Values</h2>
    <ul>
      <li *ngFor="let value of obj | values">{{ value }}</li>
    </ul>
  `
})
export class DemoComponent {
  obj = { a: 1, b: 2, c: 3 };
}
