/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { PercentPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// Register French locale
registerLocaleData(localeFr);

/*
Locale
The locale parameter is optional. If not provided, the default locale of the application will be used.
*/

@Component({
  imports: [PercentPipe],

  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {}
