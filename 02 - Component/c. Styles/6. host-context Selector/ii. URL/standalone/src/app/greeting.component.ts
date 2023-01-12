/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'greeting',
  standalone: true,
  imports: [ChildComponent],
  styleUrls: ['./greeting.component.css'],
  template: `
    <div>Hello World</div>
    <child></child>
  `
})
export class GreetingComponent {}
