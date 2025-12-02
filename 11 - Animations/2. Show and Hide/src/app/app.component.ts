/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

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
  selector: 'app',
  templateUrl: './app.component.html',
  animations: [
    trigger('fadeInOut', [
      state(
        'in',
        style({
          opacity: 1
        })
      ),
      state(
        'out',
        style({
          opacity: 0
        })
      ),
      transition('in => out', animate('1s')),
      transition('out => in', animate('1s'))
    ])
  ]
})
export class AppComponent {
  state = 'in';

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }
}
