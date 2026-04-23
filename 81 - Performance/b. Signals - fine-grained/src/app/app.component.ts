/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, computed, input, signal } from '@angular/core';

// Signal-based row — only the bindings that read changed signals re-run.
@Component({
  selector: 'app-row',
  template: `<div>{{ name() }} — {{ doubled() }}</div>`
})
export class RowComponent {
  name = input.required<string>();
  value = input.required<number>();
  doubled = computed(() => this.value() * 2);
}

@Component({
  selector: 'app-root',
  imports: [RowComponent],
  template: `
    <h1>Signals — fine-grained reactivity</h1>
    <button (click)="count.set(count() + 1)">Bump value: {{ count() }}</button>

    <app-row name="row A" [value]="count()" />
    <app-row name="row B" [value]="42" />

    <p>
      Row B reads <code>value()</code> with the constant <code>42</code>. It
      never re-renders when you click — Angular knows it does not depend on the
      changed signal.
    </p>
  `
})
export class AppComponent {
  count = signal(1);
}
