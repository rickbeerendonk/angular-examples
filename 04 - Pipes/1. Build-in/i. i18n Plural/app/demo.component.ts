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
      {{ 0 | i18nPlural: numberMap }} <strong> = Default</strong> <br />
      {{ 1 | i18nPlural: numberMap }} <strong> = Default</strong> <br />
      {{ 9 | i18nPlural: numberMap }} <strong> = Default</strong>
    </p>
  `
})
export class DemoComponent {
  numberMap: { [count: string]: string } = {
    '=0': 'No items.',
    '=1': 'One item.',
    other: '# items.'
  };
}
