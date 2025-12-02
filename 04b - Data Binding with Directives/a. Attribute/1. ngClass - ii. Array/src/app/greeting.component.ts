/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'greeting',
  template: `
    <ul>
      <li [ngClass]="classesNone">None</li>
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
