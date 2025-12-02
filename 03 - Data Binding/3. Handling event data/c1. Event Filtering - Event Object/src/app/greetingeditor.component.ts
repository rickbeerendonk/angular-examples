/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input
      autofocus
      (keyup.control.enter)="handleNewName($event.target)"
      (keyup.arrowup)="handleNewName($event.target)"
    />
    <h1>Hello {{ name() }}!</h1>
  `
})
export class GreetingEditorComponent {
  name = signal('');

  handleNewName(target: EventTarget | null) {
    this.name.set((target as HTMLInputElement).value);
  }
}
