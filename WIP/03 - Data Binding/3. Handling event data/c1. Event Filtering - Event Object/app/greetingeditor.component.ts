/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input
      autofocus
      (keyup.control.enter)="onNewName($event.target.value)"
      (keyup.arrowup)="onNewName($event.target.value)"
    />
    <h1>Hello {{ name }}!</h1>
  `
})
export class GreetingEditorComponent {
  name: string = '';

  onNewName(newName: string) {
    this.name = newName;
  }
}
