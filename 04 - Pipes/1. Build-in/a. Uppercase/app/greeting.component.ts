/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1>{{ 'Hello Uppercase Pipe' | uppercase }}</h1>
  `
})
export class GreetingComponent {}
