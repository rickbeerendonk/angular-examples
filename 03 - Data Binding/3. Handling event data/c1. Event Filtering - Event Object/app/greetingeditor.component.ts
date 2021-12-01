/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input autofocus (keyup.enter)="onNewName($event.target.value)" />
    <h1>Hello {{ name }}!</h1>
  `
})
export class GreetingEditorComponent {
  name: string = '';

  onNewName(newName: string) {
    this.name = newName;
  }
}
