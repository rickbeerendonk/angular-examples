/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app',
  template: `
    <input
      autofocus
      [value]="myObj.text"
      (keyup)="handleKeyUp($event.target)"
    />
    <h1>App: Hello {{ myObj.text }}</h1>

    <hr />

    <middle [obj]="myObj"></middle>
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class AppComponent {
  myObj = { text: 'World' };

  handleKeyUp(target: EventTarget | null) {
    const value = (target as HTMLInputElement).value;

    // Mutable:
    this.myObj.text = value;
  }
}
