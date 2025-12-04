/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app',
  template: `<h1>Injection Token - Custom Tokens</h1>
    <p style="color: gray">Open the console to see the result.</p>`
})
export class AppComponent {
  private dataService = inject(DataService);

  constructor() {
    this.dataService.fetchData();
  }
}
