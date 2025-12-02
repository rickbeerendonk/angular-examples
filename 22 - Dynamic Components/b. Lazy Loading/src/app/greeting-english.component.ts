/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk     !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting-english',
  template: `
    <label>
      English:
      <input #inp [value]="greeting" (input)="greeting = inp.value" />
    </label>
    <p>Hello {{ greeting }}</p>
  `
})
export class GreetingEnglishComponent {
  greeting = 'World';
}
