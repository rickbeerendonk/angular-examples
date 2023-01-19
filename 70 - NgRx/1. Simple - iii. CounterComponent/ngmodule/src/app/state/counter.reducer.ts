/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';

export const initialState = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { value }) => ({
    ...state,
    count: state.count + value
  })),
  on(decrement, state => ({ ...state, count: state.count - 1 }))
);
