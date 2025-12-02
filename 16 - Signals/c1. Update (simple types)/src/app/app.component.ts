/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input (keyup)="onKeyUp($event)" />
    <h1>{{ text() }}</h1>
  `
})
export class AppComponent {
  text = signal('');

  onKeyUp(event: KeyboardEvent) {
    // Update calculates the new value using the previous value
    this.text.update(value => value + event.key);
  }
}
