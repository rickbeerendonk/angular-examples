/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk     !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting-dutch',
  standalone: true,
  template: `
    <label>
      Dutch:
      <input #inp [value]="greeting" (input)="greeting = inp.value" />
    </label>
    <p>Hallo {{ greeting }}</p>
  `
})
export class GreetingDutchComponent {
  greeting = 'Wereld';
}
