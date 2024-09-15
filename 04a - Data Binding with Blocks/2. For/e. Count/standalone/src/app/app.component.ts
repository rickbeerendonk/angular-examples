/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: string[] = ['one', 'two', 'three'];
}
