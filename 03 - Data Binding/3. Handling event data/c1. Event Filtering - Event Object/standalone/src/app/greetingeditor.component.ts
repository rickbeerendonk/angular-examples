/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input
      autofocus
      (keyup.control.enter)="handleNewName($event.target)"
      (keyup.arrowup)="handleNewName($event.target)"
    />
    <h1>Hello {{ name }}!</h1>
  `,
  standalone: true
})
export class GreetingEditorComponent {
  name: string = '';

  handleNewName(target: EventTarget | null) {
    this.name = (target as HTMLInputElement).value;
  }
}
