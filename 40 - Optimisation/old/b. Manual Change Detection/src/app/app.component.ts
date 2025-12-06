/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input autofocus #text />
    <h1>App: Hello {{ text.value }}</h1>

    <hr />

    <greeting />
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class AppComponent {
  constructor(changeDetectorRef: ChangeDetectorRef) {
    // No automatic change detection
    changeDetectorRef.detach();

    // Manual change detection
    setInterval(() => {
      changeDetectorRef.detectChanges();
    }, 2000);
  }
}
