/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input
      autofocus
      (keyup.control.enter)="onNewName($event.target)"
      (keyup.arrowup)="onNewName($event.target)"
    />
    <h1>Hello {{ name }}!</h1>
  `
})
export class GreetingEditorComponent {
  name: string = '';

  onNewName(target: EventTarget | null) {
    this.name = (target as HTMLInputElement).value;
  }
}
