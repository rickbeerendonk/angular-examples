/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styleUrls: [
    './greeting.component.css'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <child />
  `
})
export class GreetingComponent {}
