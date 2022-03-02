/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

/*
To use other locales than the default en-US, 
call registerLocaleData(): see app.module.ts 

Documentation: https://angular.io/guide/i18n#setting-up-locale
*/

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  countryMap: Object = {
    NL: 'The Netherlands',
    NO: 'Norway',
    US: 'United States',
    other: '(unknown)'
  };
}
