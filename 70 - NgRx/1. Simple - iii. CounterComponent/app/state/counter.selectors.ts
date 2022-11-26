/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { /* createSelector, */ createFeatureSelector } from '@ngrx/store';

export interface CounterState {
  count: Number;
}

export interface AppState {
  counter: CounterState;
}

/*
export const selectCounter = (state: AppState) => state.counter;

export const selectCounterCount = createSelector(
  selectCounter,
  (state: CounterState) => state.count
);
*/

export const selectCounterFeature =
  createFeatureSelector<CounterState>('counter');
