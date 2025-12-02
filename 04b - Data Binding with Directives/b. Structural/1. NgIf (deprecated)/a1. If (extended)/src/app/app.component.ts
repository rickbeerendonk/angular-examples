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
  show: boolean = true;
}
