/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  standalone: true
})
export class GreetingComponent {
  name = input<string>('');

  constructor() {
    // Use effect to intercept changes
    effect(() => {
      console.log('GreetingComponent.name = ' + this.name());
    });
  }
}
