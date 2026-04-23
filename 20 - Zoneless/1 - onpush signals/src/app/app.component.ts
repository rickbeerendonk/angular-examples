/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html'
})
export class AppComponent {
  count = signal(0);

  increment(by = 1) {
    this.count.update(n => n + by);
  }

  decrement() {
    this.count.update(n => n - 1);
  }
}
