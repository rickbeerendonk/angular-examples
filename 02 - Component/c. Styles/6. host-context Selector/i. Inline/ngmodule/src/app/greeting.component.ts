/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styles: [
    `
      :host-context(.highlight) {
        background: #d676ff;
        border: 1px solid #444;
        display: block;
        font-family: Arial, Helvetica, sans-serif;
      }

      div {
        font-style: italic;
      }
    `
  ],
  template: `
    <div>Hello World</div>
    <child></child>
  `
})
export class GreetingComponent {}
