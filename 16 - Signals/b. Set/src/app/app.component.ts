/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

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
