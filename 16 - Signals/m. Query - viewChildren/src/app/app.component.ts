/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, ElementRef, viewChildren } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    @for (item of items; track item) {
      <div #itemRef>{{ item }}</div>
    }
    <button (click)="count()">Count items</button>
  `
})
export class AppComponent {
  items = ['Angular', 'Signals', 'Queries'];

  // Signal<readonly ElementRef[]>
  itemRefs = viewChildren<ElementRef>('itemRef');

  count() {
    alert(`Found ${this.itemRefs().length} items`);
  }
}
