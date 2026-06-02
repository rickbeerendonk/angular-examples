/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  template: `
    <input autofocus #text />
    <h1>App: Hello {{ text.value }}</h1>

    <hr />

    <greeting />
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class AppComponent {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    // No automatic change detection
    this.changeDetectorRef.detach();

    // Manual change detection
    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }
}
