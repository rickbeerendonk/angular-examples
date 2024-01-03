/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styleUrls: ['./greeting.component.css'],
  template: `
    <div>Hello World</div>
    <child />
  `
})
export class GreetingComponent {}
