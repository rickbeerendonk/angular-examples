/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = signal([1, 2, 3]);
  count = computed(() => this.items().length);

  constructor() {
    setInterval(() => this.addItemWrong(), 1000);
  }

  addItemWrong() {
    // Don't mutates value in place
    // It still works when you click a button
    // It will fail if triggered without a click
    this.items.update(items => {
      items.push(Math.random());
      return items;
    });
  }
}
