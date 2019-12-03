/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'greeting',
  encapsulation: ViewEncapsulation.None /* ViewEncapsulation.Emulated */,
  styles: [
    `
      div {
        background-color: lightgray;
        color: green;
      }
    `
  ],
  template: `
    <div>Hello world!</div>
    <child></child>
  `
})
export class GreetingComponent {}
