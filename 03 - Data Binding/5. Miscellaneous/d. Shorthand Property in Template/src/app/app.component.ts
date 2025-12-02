/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  prop1 = signal('abc');
  prop2 = signal(123);
  prop3 = signal(true);
}
