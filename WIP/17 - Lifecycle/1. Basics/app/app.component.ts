/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
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
