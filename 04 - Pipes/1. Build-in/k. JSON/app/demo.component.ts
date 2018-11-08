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
    <p>{{ person | json }}</p>
  `
})
export class DemoComponent {
  person: Object = {
    name: 'Jan Jansen',
    dob: new Date(1951, 11, 24),
    retired: true,
    children: 3
  };
}
