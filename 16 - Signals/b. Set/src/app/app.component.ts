/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

// Demonstration of signal update() vs set()
//
// Use set() when the new value is independent of the previous value:
// - Setting to a specific value from user input
// - Resetting to initial/default values
// - Replacing with new data from API
//
// Use update() when the new value depends on the previous value:
// - Incrementing: count.update(n => n + 1)
// - Appending: text.update(s => s + 'more')
// - Toggling: flag.update(v => !v)

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input (input)="onInput($event.target)" [value]="text()" />
    <h1>Hello {{ text() }}</h1>
  `
})
export class AppComponent {
  text = signal('World');

  onInput(target: EventTarget | null) {
    // Set replaces the previous value
    this.text.set((target as HTMLInputElement).value);
  }
}
