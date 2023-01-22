/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1 *ngIf="name">Hello {{ name }}!</h1>',
  styles: ['h1 { color: #d676ff; }']
})
export class GreetingComponent {
  @Input() name?: string;
}
