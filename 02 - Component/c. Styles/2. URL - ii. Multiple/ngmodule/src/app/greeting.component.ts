/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styleUrls: [
    './greeting.component.css',
    './second.greeting.component.css'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <span>I am green</span>
    <child />
  `
})
export class GreetingComponent {}
