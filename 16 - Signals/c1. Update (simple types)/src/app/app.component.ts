/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

// Demonstration of signal update() vs set()
//
// Use update() when the new value depends on the previous value:
// - Incrementing/decrementing numbers: count.update(n => n + 1)
// - Appending to strings: text.update(s => s + 'new')
// - Toggling booleans: flag.update(v => !v)
// - Modifying arrays/objects (creates new reference)
//
// Use set() when the new value is independent:
// - Setting to a specific value: count.set(0)
// - Replacing with user input: text.set(inputValue)

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
