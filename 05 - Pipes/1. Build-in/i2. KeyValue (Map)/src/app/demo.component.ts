/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';

type KeyType = String | null | undefined;
type ValueType = String | Number | Boolean;

@Component({
  standalone: true,
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  // Reverse order to show output is by default in alphanumerical ascending order.
  map = new Map<KeyType, ValueType>([
    ['second', 444],
    ['three', 3030],
    ['first', 'Three'],
    [undefined, true],
    [null, 222]
  ]);

  compareDesc = (
    a: KeyValue<KeyType, ValueType>,
    b: KeyValue<KeyType, ValueType>
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
