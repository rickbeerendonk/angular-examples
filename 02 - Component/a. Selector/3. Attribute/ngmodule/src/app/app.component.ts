/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div data-greeting>Should be replaced.</div>
    <div>Should not be replaced.</div>
  `
})
export class AppComponent {}
