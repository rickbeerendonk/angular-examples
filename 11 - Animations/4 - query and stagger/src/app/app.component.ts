/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = signal(['Item 1', 'Item 2', 'Item 3']);
  private counter = 3;

  addItem() {
    this.counter++;
    this.items.update(list => [...list, `Item ${this.counter}`]);
  }

  reset() {
    this.counter = 3;
    this.items.set(['Item 1', 'Item 2', 'Item 3']);
  }
}
