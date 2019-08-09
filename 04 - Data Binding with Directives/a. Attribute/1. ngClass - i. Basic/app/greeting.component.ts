/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <ul>
      <li [ngClass]="classes">First</li>
    </ul>
  `,
  styles: ['.isImportant { text-decoration: underline; }']
})
export class GreetingComponent {
  classes = 'isImportant';
}
