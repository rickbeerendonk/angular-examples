/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'greeting',
  imports: [ChildComponent],
  styleUrl: './greeting.component.css',
  template: `
    <div>Hello World</div>
    <child />
  `
})
export class GreetingComponent {}
