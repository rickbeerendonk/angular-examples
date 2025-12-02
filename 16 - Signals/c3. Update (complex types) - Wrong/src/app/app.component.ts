/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = signal([1, 2, 3]);

  addItem() {
    // Don't mutates value in place
    this.items.update(items => {
      items[0] = Math.random();
      return items;
    });
  }
}
