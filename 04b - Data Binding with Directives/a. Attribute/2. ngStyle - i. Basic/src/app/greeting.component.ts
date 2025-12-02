/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'greeting',
  template: `
    <ul>
      <li [ngStyle]="style1">First</li>
      <li [ngStyle]="style2">Second</li>
    </ul>
  `
})
export class GreetingComponent {
  style1 = { color: 'red' };
  style2 = { color: 'green' };
}
