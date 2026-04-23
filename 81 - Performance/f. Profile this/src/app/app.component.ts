/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

// Deliberately slow — for profiling practice.
// Open Performance panel, record a click on "Bump", then look at:
//   - the long yellow JS task
//   - the Bottom-Up view: heavyWork() dominates self-time
//   - Angular DevTools → Profiler: which component ran
@Component({
  selector: 'app-row',
  template: `<div>{{ label }} — {{ heavyWork() }}</div>`
})
export class RowComponent {
  label = 'row';

  // Called on every change detection cycle.
  // Sums a million numbers — intentionally expensive.
  heavyWork(): number {
    let sum = 0;
    for (let i = 0; i < 1_000_000; i++) {
      sum += Math.sqrt(i);
    }
    return Math.round(sum);
  }
}

@Component({
  selector: 'app-root',
  imports: [RowComponent],
  template: `
    <h1>Profile me</h1>
    <button (click)="tick.set(tick() + 1)">Bump: {{ tick() }}</button>

    @for (i of rows; track i) {
      <app-row />
    }

    <p>
      Open Performance panel → record → click Bump → stop. The long yellow task
      is <code>heavyWork()</code> running 50 times per click. Replace the method
      with a <code>computed()</code> signal and re-record.
    </p>
  `
})
export class AppComponent {
  tick = signal(0);
  rows = Array.from({ length: 50 }, (_, i) => i);
}
