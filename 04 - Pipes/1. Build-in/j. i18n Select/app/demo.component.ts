/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

/*
To use other locales than the default en-US, 
call registerLocaleData(): see app.module.ts 

Documentation: https://angular.io/guide/i18n#setting-up-locale
*/

@Component({
  selector: 'demo',
  template: `
    <p>
      {{ 'US' | i18nSelect: countryMap }} <br />
      {{ 'NO' | i18nSelect: countryMap }} <br />
      {{ 'NL' | i18nSelect: countryMap }} <br />
      {{ 'CO' | i18nSelect: countryMap }}
    </p>
  `
})
export class DemoComponent {
  countryMap: Object = {
    NL: 'The Netherlands',
    NO: 'Norway',
    US: 'United States',
    other: '(unknown)'
  };
}
