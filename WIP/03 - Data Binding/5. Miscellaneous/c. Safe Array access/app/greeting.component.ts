/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{ names?.[0] }}!</h1>' // Angular 12.1
})
export class GreetingComponent {
  names: string[] | null;

  constructor() {
    // Add a name after 3 seconds and observe the UI change
    setTimeout(() => (this.names = ['Angular']), 3000);
  }
}
