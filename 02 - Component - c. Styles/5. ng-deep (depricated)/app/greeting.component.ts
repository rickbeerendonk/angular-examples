/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styles: [
    `
      :host ::ng-deep div {
        background-color: lightgray;
      }

      ::ng-deep div {
        color: green;
      }
    `
  ],
  template: `
    <div>Hello div</div>
    <p>Hello p</p>
    <child></child>
  `
})
export class GreetingComponent {}
