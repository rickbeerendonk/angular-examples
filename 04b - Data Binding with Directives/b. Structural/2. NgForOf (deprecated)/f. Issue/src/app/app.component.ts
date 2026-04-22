/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  imports: [CommonModule, NgForOf],
  templateUrl: './app.component.html'
})
export class AppComponent {
  items = [{ label: 'one' }, { label: 'two' }, { label: 'three' }];

  insertTop() {
    // .map() returns brand-new object references for every item
    this.items = [
      { label: String(this.items.length + 1) },
      ...this.items.map(i => ({ label: i.label }))
    ];
  }
}
