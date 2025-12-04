/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { EmphasisDirective } from './emphasis.directive';

@Component({
  selector: 'app-root',
  imports: [EmphasisDirective],
  template: `
    <h1>Attribute Directives - input() Signal</h1>
    <p>This is a normal paragraph.</p>
    <p emphasis>This paragraph uses the default red color. Hover over it!</p>
    <p emphasis color="blue">
      This paragraph uses blue color via input signal. Hover over it!
    </p>
    <p emphasis color="green">
      This paragraph uses green color via input signal. Hover over it!
    </p>
  `
})
export class AppComponent {}
