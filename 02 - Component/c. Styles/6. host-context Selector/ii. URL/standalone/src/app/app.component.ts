/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [GreetingComponent],
  template: `
    <div class="highlight">
      <div>App component</div>
      <greeting />
    </div>
    <hr />
    <div>
      <div>App component</div>
      <greeting />
    </div>
  `
})
export class AppComponent {}
