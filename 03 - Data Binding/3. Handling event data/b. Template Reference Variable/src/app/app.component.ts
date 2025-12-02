/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input #text (input)="(0)" value="World" />
    <h1>Hello {{ text.value }}</h1>
  `
})
export class AppComponent {}
