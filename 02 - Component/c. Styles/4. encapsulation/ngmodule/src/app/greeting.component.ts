/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'greeting',
  encapsulation: ViewEncapsulation.None /* ViewEncapsulation.Emulated */,
  styles: [
    'div { color: #d676ff; }'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <child />
  `
})
export class GreetingComponent {}
