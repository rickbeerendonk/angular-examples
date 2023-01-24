/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface CounterFeatureState {
  count: Number;
}

export const selectCounterFeature =
  createFeatureSelector<CounterFeatureState>('counter');
