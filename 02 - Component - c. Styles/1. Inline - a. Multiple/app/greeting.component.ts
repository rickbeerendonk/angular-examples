/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styles: [
    'div { color: #d676ff; }',
    'span { color: green }'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <span>I am green</span>
    <child></child>
  `
})
export class GreetingComponent {}
