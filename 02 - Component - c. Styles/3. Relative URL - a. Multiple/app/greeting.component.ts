/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'greeting',
  styleUrls: ['./greeting.component.css', './second.greeting.component.css'],
  template: `
    <div>Hello World</div>
    <span>I am green</span>
    <child></child>
  `
})
export class GreetingComponent {}
