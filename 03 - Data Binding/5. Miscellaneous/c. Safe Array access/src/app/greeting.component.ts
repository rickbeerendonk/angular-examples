/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{ names()?.[0] }}!</h1>'
})
export class GreetingComponent {
  names = signal<string[] | undefined>(undefined);

  constructor() {
    // Add a name after 3 seconds and observe the UI change
    setTimeout(() => this.names.set(['Angular']), 3000);
  }
}
