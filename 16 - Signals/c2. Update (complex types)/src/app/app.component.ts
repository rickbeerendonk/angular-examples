/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = signal([1, 2, 3]);

  addItem() {
    // Mutates value in place
    this.items.update(items => {
      items.push(Math.random());
      return items;
    });
  }
}
