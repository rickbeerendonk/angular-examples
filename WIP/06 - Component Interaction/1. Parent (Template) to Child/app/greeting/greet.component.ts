/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,

  // Add required property as an attribute to the selector
  selector: 'greet[name]',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  // Optional
  @Input() greeting?: string = 'Hello';

  // Required
  @Input() name: string;
}