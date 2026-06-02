/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>{{ count() }}</h1>
    <button (click)="increment()">+</button>
  `
})
export class AppComponent {
  // Internal writable signal
  private _count = signal(0); // WritableSignal<number>

  // Benefits of using 'asReadonly':
  // 1. Encapsulation: Prevents external code from modifying the signal's value directly.
  // 2. Intent: Makes it clear to consumers that they should not attempt to change the value.
  readonly count = this._count.asReadonly(); // Signal<number>

  increment() {
    this._count.update(c => c + 1);
  }
}
