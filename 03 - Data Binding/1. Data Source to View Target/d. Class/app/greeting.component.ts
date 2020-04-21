/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1 [class.highlight]="current" [class.isImportant]="important">
      Hello World!
    </h1>
  `,
  styles: [
    '.highlight { color: red }',
    '.isImportant { text-decoration: underline; }'
  ]
})
export class GreetingComponent {
  current = true;
  important = true;
}
