/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'greeting',
  template: '<button (click)="handleClick()">Hello World</button>'
})
export class GreetingComponent {
  handleClick() {
    alert('Hello World!');
  }
}
