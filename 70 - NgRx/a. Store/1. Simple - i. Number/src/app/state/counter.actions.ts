/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter Component] Increment',
  props<{ value: number }>()
);

export const decrement = createAction('[Counter Component] Decrement');
