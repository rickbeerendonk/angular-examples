/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'greeting',
  imports: [ChildComponent],
  styles: [
    `
      :host {
        background: #d676ff;
        border: 1px solid #444;
        display: block;
        font-family: Arial, Helvetica, sans-serif;
      }

      div {
        color: white;
      }
    `
  ] /* Style only apply to this component, not the parent nor the child components */,
  template: `
    <div>Hello World</div>
    <child />
  `
})
export class GreetingComponent {}
