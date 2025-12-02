/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  imports: [NgForOf],
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  count = 1;

  constructor() {
    setInterval(() => this.count++, 5000);
  }
}
