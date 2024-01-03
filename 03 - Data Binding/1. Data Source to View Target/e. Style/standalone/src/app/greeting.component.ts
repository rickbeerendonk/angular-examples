/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1
      [style.color]="important ? 'orange' : 'gray'"
      [style.backgroundColor]="'blue'"
    >
      Hello World!
    </h1>
  `,
  standalone: true
})
export class GreetingComponent {
  important: boolean = true;
}
