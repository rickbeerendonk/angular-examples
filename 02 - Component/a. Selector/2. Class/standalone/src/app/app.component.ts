/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [GreetingComponent],
  template: `
    <div class="greeting">Should be replaced.</div>
    <div>Should not be replaced.</div>
  `
})
export class AppComponent {}
