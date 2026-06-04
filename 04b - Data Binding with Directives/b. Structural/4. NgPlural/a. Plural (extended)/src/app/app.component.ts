/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { NgPlural, NgPluralCase } from '@angular/common';

@Component({
  imports: [NgPlural, NgPluralCase],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  count = signal(3);
}
