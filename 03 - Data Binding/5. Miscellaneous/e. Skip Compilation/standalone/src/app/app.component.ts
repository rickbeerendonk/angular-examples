/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <h1>Hello {{'{{name}}'}}!</h1>

    <hr />

    <p>Doesn't work (only with a space)</p>
    <h1>Hello &#123; &#123;name&#125;&#125;!</h1>
  `
})
export class AppComponent {}
