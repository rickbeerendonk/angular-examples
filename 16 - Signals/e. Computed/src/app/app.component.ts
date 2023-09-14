/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <input (input)="onInput($event.target)" [value]="text()" />
    <h1>Hello {{ text() }}</h1>
    <h1>HELLO {{ uppercaseText() }}</h1>
  `
})
export class AppComponent {
  text = signal('World');
  uppercaseText = computed(() => this.text().toUpperCase());

  onInput(target: EventTarget | null) {
    // Set replaces the previous value
    this.text.set((target as HTMLInputElement).value);
  }
}
