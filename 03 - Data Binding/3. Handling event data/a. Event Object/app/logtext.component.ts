/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <input autofocus (keyup)="onKeyUp($event)" />
    <h1>{{ text }}</h1>
  `
})
export class LogTextComponent {
  // Component has too much awareness of the template details

  text: string = '';

  onKeyUp(event: KeyboardEvent) {
    this.text += event.key;
  }
}
