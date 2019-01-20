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
    <p>{{ date | date }} <strong> = Default</strong></p>
    <p>{{ date | date: 'full' }} <strong> = Format: 'full'</strong></p>
    <p>{{ date | date: 'mm ss' }} <strong> = Format: 'mm ss'</strong></p>
    <p>
      {{ date | date: 'short':'+0430' }}
      <strong> = Timezone +0430 (short format)</strong>
    </p>
    <p>{{ date | date: 'full':'':'en-US' }} <strong> = English</strong></p>
    <p>{{ date | date: 'full':'':'nl' }} <strong> = Dutch</strong></p>
  `
})
export class DemoComponent {
  date: Date = new Date();
}
