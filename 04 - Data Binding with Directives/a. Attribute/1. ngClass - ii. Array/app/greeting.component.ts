/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <ul>
      <li [ngClass]="classesNone">Single</li>
      <li [ngClass]="classesSingle">Single</li>
      <li [ngClass]="classesMultiple">Multiple</li>
    </ul>
  `,
  styles: [
    '.highlight { color: red }',
    '.isImportant { text-decoration: underline }'
  ]
})
export class GreetingComponent {
  classesNone: string[] = [];
  classesSingle: string[] = ['highlight'];
  classesMultiple: string[] = ['highlight', 'isImportant'];
}
