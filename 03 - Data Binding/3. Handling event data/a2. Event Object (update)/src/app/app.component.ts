/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input (keyup)="onKeyUp($event)" />
    <h1>{{ text() }}</h1>
  `
})
export class AppComponent {
  // Component has too much awareness of the template details

  text = signal('');

  onKeyUp(event: KeyboardEvent) {
    this.text.update(value => value + event.key);
  }
}
