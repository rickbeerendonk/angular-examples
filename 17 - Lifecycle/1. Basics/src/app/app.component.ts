/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'A';
  show = true;

  constructor() {
    setTimeout(() => (this.name = 'B'), 500);
    setTimeout(() => (this.show = false), 1000);
  }
}
