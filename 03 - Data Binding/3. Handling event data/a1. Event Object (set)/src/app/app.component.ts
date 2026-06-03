/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input (input)="onInput($event.target)" [value]="text()" />
    <h1>Hello {{ text() }}</h1>
  `
})
export class AppComponent {
  // Component has too much awareness of the template details

  text = signal('World');

  onInput(target: HTMLInputElement) {
    this.text.set(target.value);
  }
}
