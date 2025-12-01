/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  template: `
    <greeting>Should be replaced.</greeting>
    <div>Should not be replaced.</div>
  `
})
export class AppComponent {}
