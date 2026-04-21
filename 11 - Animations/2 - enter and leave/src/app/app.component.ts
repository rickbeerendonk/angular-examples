/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = signal(true);
}
