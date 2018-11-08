/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1 [class.isImportant]="important">Hello World!</h1>
  `,
  styles: ['.isImportant { text-decoration: underline; }']
})
export class GreetingComponent {
  important: boolean = true;
}
