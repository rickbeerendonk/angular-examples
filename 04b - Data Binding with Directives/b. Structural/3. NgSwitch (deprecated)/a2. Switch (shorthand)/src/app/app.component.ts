/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  countryCode: string = 'NL';
}
