/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component } from '@angular/core';

interface Item {
  name: string;
  id: number;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: Item[] = [
    { name: 'one', id: 0 },
    { name: 'two', id: 1 },
    { name: 'three', id: 2 }
  ];

  trackByItemId(index: number, item: Item): number {
    return item.id; // Unique identifier of the item.
  }
}
