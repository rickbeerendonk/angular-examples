/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, computed, signal } from '@angular/core';

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

  // Guards encode the allowed transition graph.
  canLoad = computed(() => {
    const k = this.state().kind;
    return k === 'idle' || k === 'error';
  });
  canFinish = computed(() => this.state().kind === 'loading');
  canReset = computed(() => this.state().kind !== 'idle');

  load() {
    if (!this.canLoad()) return;
    this.state.set({ kind: 'loading' });
  }
  succeed() {
    if (!this.canFinish()) return;
    this.state.set({ kind: 'loaded', orders: ['Coffee', 'Tea'] });
  }
  fail() {
    if (!this.canFinish()) return;
    this.state.set({ kind: 'error', message: 'Network error' });
  }
  reset() {
    if (!this.canReset()) return;
    this.state.set({ kind: 'idle' });
  }
}
