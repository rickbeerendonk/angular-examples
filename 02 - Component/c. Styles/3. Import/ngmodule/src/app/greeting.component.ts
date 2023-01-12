/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styles: [
    '@import "./greeting.component.css"'
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <child></child>
  `
})
export class GreetingComponent {}
