/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEl from '@angular/common/locales/el';
import localeNl from '@angular/common/locales/nl';

// Register Dutch locale
registerLocaleData(localeNl);

// Register Greek locale
registerLocaleData(localeEl);

@Component({
  imports: [DatePipe],

  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  date: Date = new Date();
}
