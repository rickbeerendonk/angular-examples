/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input autofocus [value]="myObj.text" (keyup)="handleKeyUp($event.target.value)" />
    <h1>App: Hello {{ myObj.text }}</h1>

    <hr />

    <middle [obj]="myObj"></middle>
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class AppComponent {
  myObj = { text: 'World' };

  handleKeyUp(value: string) {
    this.myObj.text = value;
  }
}
