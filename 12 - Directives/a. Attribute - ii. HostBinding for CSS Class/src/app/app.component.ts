/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { EmphasisDirective } from './emphasis.directive';

@Component({
  selector: 'app-root',
  imports: [EmphasisDirective],
  template: `
    <h1>Attribute Directives</h1>
    <p>This is a normal paragraph.</p>
    <p emphasis>This paragraph should be red & bold when you hover over it.</p>
  `,
  styles: ['.emphasis { color: red; font-weight: bold; }']
})
export class AppComponent {}
