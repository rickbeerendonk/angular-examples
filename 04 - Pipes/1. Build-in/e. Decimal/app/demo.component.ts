/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

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
    {{123.456 | number}}
    <strong> = Default</strong>
  </p>
  <p>
    {{123.456 | number:'1.0-1'}}
    <strong> = Min. 1 integer digit & max. 1 digit after fraction</strong>
  </p>
  <p>
    {{123.456 | number:'5.5-5'}}
    <strong> = Min. 5 integer digits & min. 5 digits after fraction</strong>
  </p>
  <p>
    {{1234.567 | number:'':'en'}}
    <strong> = English</strong>
  </p>
  <p>
    {{1234.567 | number:'':'fr'}}
    <strong> = French</strong>
  </p>
`
})
export class DemoComponent {
}
