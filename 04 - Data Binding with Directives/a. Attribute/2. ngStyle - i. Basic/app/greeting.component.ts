/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <ul>
      <li [ngStyle]="{ color: color1 }">First</li>
      <li [ngStyle]="{ color: color2 }">Second</li>
    </ul>
  `
})
export class GreetingComponent {
  color1 = 'red';
  color2 = 'green';
}
