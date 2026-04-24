/*! Copyright © 2026 Rick Beerendonk !*/

import { signal } from '@angular/core';

export class CounterService {
  count = signal(0);

  increment() {
    this.count.update(n => n + 1);
  }

  decrement() {
    this.count.update(n => n - 1);
  }

  reset() {
    this.count.set(0);
  }
}
