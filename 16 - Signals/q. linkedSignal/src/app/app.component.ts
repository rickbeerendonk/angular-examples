/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Selected: {{ selectedItem() }}</h1>
    @for (item of items(); track item) {
      <button (click)="select(item)">{{ item }}</button>
    }
    <hr />
    <button (click)="reload()">Reload list</button>
  `
})
export class AppComponent {
  items = signal(['Angular', 'React', 'Vue']);

  // Writable signal that resets when `items` changes
  selectedItem = linkedSignal(() => this.items()[0]);

  select(item: string) {
    this.selectedItem.set(item);
  }

  reload() {
    // Triggers linkedSignal to recompute → selectedItem resets to first item
    this.items.set(['Svelte', 'Solid', 'Qwik']);
  }
}
