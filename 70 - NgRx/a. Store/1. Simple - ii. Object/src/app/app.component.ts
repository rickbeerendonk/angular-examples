/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  CounterFeatureState,
  selectCounterFeature
} from './state/counter.selectors';
import { increment, decrement } from './state/counter.actions';

@Component({
  standalone: true,
  selector: 'app',
  template: `
    <h1>{{ (counter$ | async)!.count }}</h1>
    <div>
      <button (click)="increment()">+</button>
      <button (click)="increment(5)">+5</button>
      <button (click)="decrement()">-</button>
    </div>
  `
})
export class AppComponent {
  counter$: Observable<CounterFeatureState>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounterFeature);
  }

  increment(value: number = 1) {
    this.store.dispatch(increment({ value }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
