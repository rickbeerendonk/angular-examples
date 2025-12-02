/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1
      [style.color]="important() ? 'orange' : 'gray'"
      [style.backgroundColor]="'blue'"
    >
      Hello World!
    </h1>
  `
})
export class GreetingComponent {
  important = signal(true);
}
