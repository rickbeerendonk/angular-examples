/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '@if (name()) { <h1>Hello {{ name() }}!</h1> }',
  styles: ['h1 { color: #d676ff; }']
})
export class GreetingComponent {
  name = input<string>();
}
