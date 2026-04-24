/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

// Each state carries its own payload. TypeScript narrows by `kind`.
type OrdersState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'loaded'; orders: string[] }
  | { kind: 'error'; message: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  state = signal<OrdersState>({ kind: 'idle' });

  load() {
    this.state.set({ kind: 'loading' });
  }
  succeed() {
    this.state.set({ kind: 'loaded', orders: ['Coffee', 'Tea'] });
  }
  fail() {
    this.state.set({ kind: 'error', message: 'Network error' });
  }
}
