/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Attribute Directives</h1>
    <p>This is a normal paragraph.</p>
    <p emphasis>This paragraph should be red & bold when you hover over it.</p>
  `
})
export class AppComponent {}
