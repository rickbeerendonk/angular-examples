/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input (input)="onInput($event.target)" [value]="text()" />
    <h1>Hello {{ text() }}</h1>
  `,
})
export class AppComponent {
  // Component has too much awareness of the template details

  text: WritableSignal<string> = signal('World');

  onInput(target: EventTarget | null) {
    this.text.set((target as HTMLInputElement).value);
  }
}
