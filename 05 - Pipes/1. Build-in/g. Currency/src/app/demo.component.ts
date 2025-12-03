/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeEl from '@angular/common/locales/el';

// Register Greek locale
registerLocaleData(localeEl);

/*
Locale
The locale parameter is optional. If not provided, the default locale of the application will be used.
*/

@Component({
  imports: [CurrencyPipe],

  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {}
