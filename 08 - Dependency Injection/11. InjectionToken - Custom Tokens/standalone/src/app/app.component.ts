/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app',
  standalone: true,
  template: `<h1>Injection Token - Custom Tokens</h1>
    <p style="color: gray">Open the console to see the result.</p>`
})
export class AppComponent {
  constructor(private dataService: DataService) {
    dataService.fetchData();
  }
}
