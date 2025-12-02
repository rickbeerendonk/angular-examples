/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgPlural, NgPluralCase } from '@angular/common';

@Component({
  imports: [NgPlural, NgPluralCase],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  count: number = 3;
}
