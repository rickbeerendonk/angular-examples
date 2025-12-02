/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input autofocus #newname (keyup.enter)="handleNewName(newname.value)" />
    <h1>Hello {{ name() }}!</h1>
  `
})
export class GreetingEditorComponent {
  name = signal('');

  handleNewName(newName: string) {
    this.name.set(newName);
  }
}
