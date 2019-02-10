/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greetingeditor',
  template: `
    <input #newname (keyup.enter)="onEnter(newname.value)" />
    <h1>Hello {{ name }}!</h1>
  `
})
export class GreetingEditorComponent {
  name: string = '';

  onEnter(newName: string) {
    this.name = newName;
  }
}
