/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: string[] = ['one', 'two', 'three'];

  insertTop() {
    this.items = [String(this.items.length + 1), ...this.items];
  }
}
