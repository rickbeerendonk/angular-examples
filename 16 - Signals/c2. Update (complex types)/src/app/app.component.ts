/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = signal([1, 2, 3]);

  addItem() {
    // Don't mutates value in place
    this.items.update(items => [...items, Math.random()]);
  }
}
