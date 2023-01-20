/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk     !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting-spanish',
  standalone: true,
  template: `
    <label>
      Spanish:
      <input #inp [value]="greeting" (input)="greeting = inp.value" />
    </label>
    <p>Hola {{ greeting }}</p>
  `
})
export class GreetingSpanishComponent {
  greeting = 'Mundo';
}
