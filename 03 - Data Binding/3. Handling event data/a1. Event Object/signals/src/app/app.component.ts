/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <input (keyup)="onKeyUp($event)" />
    <h1>{{ text() }}</h1>
  `
})
export class AppComponent {
  // Component has too much awareness of the template details

  text: WritableSignal<string> = signal('');

  onKeyUp(event: KeyboardEvent) {
    this.text.update(value => value + event.key);
  }
}
