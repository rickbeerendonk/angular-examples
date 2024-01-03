/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
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
