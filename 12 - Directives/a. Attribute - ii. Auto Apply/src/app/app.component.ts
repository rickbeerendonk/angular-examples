/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { EmphasisDirective } from './emphasis.directive';

@Component({
  selector: 'app-root',
  imports: [EmphasisDirective],
  template: `
    <h1>Attribute Directives</h1>
    <p>This is paragraph 1.</p>
    <p>This is paragraph 2.</p>
    <span>This is a span.</span>
  `
})
export class AppComponent {}
