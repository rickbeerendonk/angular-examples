/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, ViewEncapsulation } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'greeting',
  imports: [ChildComponent],
  encapsulation: ViewEncapsulation.Emulated /* ViewEncapsulation.None */,
  styles: [
    'div { color: #d676ff; }'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <child />
  `
})
export class GreetingComponent {}
