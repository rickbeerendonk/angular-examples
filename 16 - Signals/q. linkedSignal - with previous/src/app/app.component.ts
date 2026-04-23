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
    <button (click)="addItem()">Add item</button>
    <button (click)="removeSelected()">Remove selected</button>
  `
})
export class AppComponent {
  items = signal(['Angular', 'React', 'Vue']);

  // Keeps the previous selection if it still exists in the new list
  selectedItem = linkedSignal<string[], string>({
    source: this.items,
    computation: (newItems, previous) => {
      if (previous && newItems.includes(previous.value)) {
        return previous.value;
      }
      return newItems[0];
    }
  });

  select(item: string) {
    this.selectedItem.set(item);
  }

  addItem() {
    this.items.update(items => [...items, `Item ${items.length + 1}`]);
  }

  removeSelected() {
    this.items.update(items => items.filter(i => i !== this.selectedItem()));
  }
}
