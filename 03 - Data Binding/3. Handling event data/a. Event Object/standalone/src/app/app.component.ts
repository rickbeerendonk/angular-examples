/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <input (keyup)="onKeyUp($event)" />
    <h1>{{ text }}</h1>
  `
})
export class AppComponent {
  // Component has too much awareness of the template details

  text: string = '';

  onKeyUp(event: KeyboardEvent) {
    this.text += event.key;
  }
}
