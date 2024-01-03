/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'greeting',
  standalone: true,
  imports: [ChildComponent],
  styles: [
    'div { color: #d676ff; }',
    'span { color: green }'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <span>I am green</span>
    <child />
  `
})
export class GreetingComponent {}
