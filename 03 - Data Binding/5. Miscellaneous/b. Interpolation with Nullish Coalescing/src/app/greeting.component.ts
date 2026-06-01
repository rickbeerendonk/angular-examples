/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{ name() ?? "(no name)" }}!</h1>'
})
export class GreetingComponent {
  name = signal<string | undefined>(undefined);

  constructor() {
    // Add a name after 3 seconds and observe the UI change
    // Set the name to null after 6 seconds and observe the UI change
    setTimeout(() => this.name.set('Angular'), 3000);
    setTimeout(() => this.name.set(undefined), 6000);
  }
}
