/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <h1>Entries</h1>
    <ul>
      <li *ngFor="let entry of obj | entries">{{ entry }}</li>
    </ul>
    <h1>Keys</h1>
    <ul>
      <li *ngFor="let key of obj | keys">{{ key }}</li>
    </ul>
    <h1>Values</h1>
    <ul>
      <li *ngFor="let value of obj | values">{{ value }}</li>
    </ul>
  `
})
export class DemoComponent {
  obj = { a: 1, b: 2, c: 3 };
}
