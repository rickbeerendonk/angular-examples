/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  show = true;

  constructor() {
    setInterval(() => (this.show = !this.show), 2000);
  }
}
