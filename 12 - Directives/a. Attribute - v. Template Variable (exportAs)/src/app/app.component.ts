/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { MouseCapturedDirective } from './mouse-captured.directive';

@Component({
  selector: 'app-root',
  imports: [MouseCapturedDirective],
  template: `
    <h1>Attribute Directives</h1>
    <p mouseCaptured #mouse1="mouseCaptured">
      Paragraph 1 contains the mouse: {{ mouse1.captured }}
    </p>
    <p mouseCaptured #mouse2="mouseCaptured">
      Paragraph 2 contains the mouse: {{ mouse2.captured }}
    </p>
  `
})
export class AppComponent {}
