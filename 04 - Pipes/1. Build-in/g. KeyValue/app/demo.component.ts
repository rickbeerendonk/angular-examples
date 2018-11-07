/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <h1>Object</h1>

    <h2>Default order</h2>
    <ul>
      <li *ngFor="let prop of obj | keyvalue">
        {{prop.key}}: {{prop.value}}
      </li>
    </ul>

    <h2>Compare function order</h2>
    <ul>
      <li *ngFor="let prop of obj | keyvalue: compareDesc">
        {{prop.key}}: {{prop.value}}
      </li>
    </ul>

    <h1>Map</h1>

    <h2>Default order</h2>
    <ul>
      <li *ngFor="let item of map | keyvalue">
        {{item.key}}: {{item.value}}
      </li>
    </ul>

    <h2>Compare function order</h2>
    <ul>
      <li *ngFor="let item of map | keyvalue: compareDesc">
        {{item.key}}: {{item.value}}
      </li>
    </ul>

    <h1>Array</h1>

    <h2>Default order</h2>
    <ul>
      <li *ngFor="let item of arr | keyvalue">
        {{item.key}}: {{item.value}}
      </li>
    </ul>

    <h2>Compare function order</h2>
    <ul>
      <li *ngFor="let item of arr | keyvalue: compareDesc">
        {{item.key}}: {{item.value}}
      </li>
    </ul>
  `
})
export class DemoComponent {
  obj = {
    // Reverse order to show output is by default in alphanumerical ascending order.
    prop2: 'Two',
    prop1: 111,
  };

  // Reverse order to show output is by default in alphanumerical ascending order.
  map = new Map<String, String|Number|Boolean>([
    ['second', 444],
    ['first', 'Three'],
    [null, 222],
    [undefined, true],
  ]);

  arr = [1, 22, 333, 4444];

  compareDesc = (a: {key: string, value: any}, b: {key: string, value: any}) => {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  };
}
