/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  prop1 = 'abc';
  prop2 = 123;
  prop3 = true;
}
