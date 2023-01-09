/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'greeting',
  styleUrls: ['./greeting.component.css'],
  template: `
    <div>Hello World</div>
    <child></child>
  `
})
export class GreetingComponent {}
