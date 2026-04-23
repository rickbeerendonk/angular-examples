/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Use untracked() to read a signal without tracking it as a dependency:
// - Prevents a computed() or effect() from re-running when that signal changes
// - Useful when a value is needed for a calculation but should not trigger recomputation
//
// Benefits:
// - Fine-grained control over which signals trigger recomputation
// - Avoids unnecessary recomputations
//
// DON'T use untracked() when:
// - You want the computed() to update when the signal changes

import {
  Component,
  computed,
  Signal,
  signal,
  untracked,
  WritableSignal
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>
      Count: {{ count() }}
      <button (click)="count.set(count() + 1)">
        Increment count ({{ count() }})
      </button>
    </p>
    <p>
      Multiplier: {{ multiplier() }}
      <button (click)="multiplier.set(multiplier() + 1)">
        Increment multiplier ({{ multiplier() }})
      </button>
    </p>
    <p>Result: {{ result() }}</p>
    <p>
      <em
        >Result only recomputes when count changes, not when multiplier
        changes.</em
      >
    </p>
  `
})
export class AppComponent {
  count: WritableSignal<number> = signal(0);
  multiplier: WritableSignal<number> = signal(2);

  // Re-computes only when count changes — not when multiplier changes
  result: Signal<number> = computed(
    () => this.count() * untracked(() => this.multiplier())
  );
}
