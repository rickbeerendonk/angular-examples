/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1 [class.highlight]="current()" [class.isImportant]="important()">
      Hello World!
    </h1>
  `,
  styles: [
    '.highlight { color: red }',
    '.isImportant { text-decoration: underline; }'
  ]
})
export class GreetingComponent {
  current = signal(true);
  important = signal(true);
}
