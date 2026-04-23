/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

// Default change detection — every event re-checks all bindings.
@Component({
  selector: 'app-row-default',
  template: `<div>{{ name }} ({{ check() }})</div>`
})
export class RowDefaultComponent {
  name = 'default';
  count = 0;
  // Increments every time this binding is evaluated.
  check() {
    return ++this.count;
  }
}

// OnPush — only checked when an Input reference changes
// or an event fires from this component.
@Component({
  selector: 'app-row-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>{{ name }} ({{ check() }})</div>`
})
export class RowOnPushComponent {
  name = 'OnPush';
  count = 0;
  check() {
    return ++this.count;
  }
}

@Component({
  selector: 'app-root',
  imports: [RowDefaultComponent, RowOnPushComponent],
  template: `
    <h1>Default vs OnPush</h1>
    <button (click)="tick.set(tick() + 1)">Tick: {{ tick() }}</button>

    <h2>Default</h2>
    <app-row-default />
    <app-row-default />

    <h2>OnPush</h2>
    <app-row-onpush />
    <app-row-onpush />

    <p>
      Click the button. The check counter on the OnPush rows stops growing — the
      button event lives in this parent component, but no Input changed.
    </p>
  `
})
export class AppComponent {
  tick = signal(0);
}
