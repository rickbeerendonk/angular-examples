/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

// Imports for animations
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'greeting',
  template: `
    <h1 [@fadeAnimation]="'in'">Hello World!</h1>
  `,
  animations: [
    trigger('fadeAnimation' /* same as in template */, [
      // Visible state
      state('in', style({ opacity: 1 })),

      // transition(:enter) or transition('void => *')
      transition(':enter', [
        // Start style
        style({ opacity: 0 }),
        animate(600)
      ]),

      // transition(:leave) or transition('void => *')
      transition(
        ':leave',
        // End style within animate()
        animate(600, style({ opacity: 0 }))
      )
    ])
  ]
})
export class GreetingComponent {}
