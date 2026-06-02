/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  CounterFeatureState,
  selectCounterFeature
} from './state/counter.selectors';
import { increment, decrement } from './state/counter.actions';

@Component({
  imports: [AsyncPipe],

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
  private readonly store = inject(Store);
  counter$: Observable<CounterFeatureState> =
    this.store.select(selectCounterFeature);

  increment(value: number = 1) {
    this.store.dispatch(increment({ value }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
