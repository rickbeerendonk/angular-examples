/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Store } from '@ngrx/store';
import { increment, decrement } from './state/counter.actions';

@Component({
  selector: 'app',
  template: `
    <h1>{{ count() }}</h1>
    <div>
      <button (click)="increment()">+</button>
      <button (click)="increment(5)">+5</button>
      <button (click)="decrement()">-</button>
    </div>
  `
})
export class AppComponent {
  private store = inject(Store<{ count: number }>);
  count = toSignal(this.store.select('count'), { initialValue: 0 });

  increment(value: number = 1) {
    this.store.dispatch(increment({ value }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
