/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <input (input)="onInput($event.target)" [value]="text" />
    <h1>Hello {{ text }}</h1>
  `
})
export class AppComponent {
  // Component has too much awareness of the template details

  text = 'World';

  onInput(target: EventTarget | null) {
    this.text = (target as HTMLInputElement).value;
  }
}
