/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// See: https://angular.dev/best-practices/security#sanitization-example

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p style="color: gray">See console for sanitizing message</p>
    <div>
      Safe (escaped): <span>{{ htmlString }}</span>
    </div>
    <div>"Dangerous" (not escaped): <span [innerHTML]="htmlString"></span></div>
  `
})
export class AppComponent {
  htmlString = '<u onmouseover=alert("Hacked!")>Dangerous</u>';
}
