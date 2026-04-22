/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

// Use computed() for deriving values from signals:
// - Transforming/formatting data (uppercase, lowercase, formatting)
// - Calculations based on other signals (sum, average, etc.)
// - Filtering/mapping arrays
// - Combining multiple signals into one value
//
// Benefits:
// - Memoized: Only recalculates when dependencies change
// - Read-only: Cannot be directly modified
// - Automatically tracks dependencies
//
// DON'T use computed() for:
// - Side effects → use effect() instead

import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input (input)="onInput($event.target)" [value]="text()" />
    <h1>Hello {{ text() }}</h1>
    <h1>HELLO {{ uppercaseText() }}</h1>

    <button (click)="handleClick()">
      This button has been clicked {{ count() }} times
    </button>
  `
})
export class AppComponent {
  text: WritableSignal<string> = signal('World');
  count = signal(0);

  handleClick() {
    this.count.update(c => c + 1);
  }

  // Derived signal using computed()
  uppercaseText: Signal<string> = computed(
    () => this.text().toUpperCase() + ' @ ' + new Date().toLocaleTimeString()
  );

  onInput(target: EventTarget | null) {
    // Set replaces the previous value
    this.text.set((target as HTMLInputElement).value);
  }
}
