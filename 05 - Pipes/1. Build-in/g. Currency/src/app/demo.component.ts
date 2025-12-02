/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

/*
To use other locales than the default en-US, 
call registerLocaleData(): see app.module.ts 

Documentation: https://angular.io/guide/i18n#setting-up-locale
*/

@Component({
  imports: [CurrencyPipe],

  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {}
