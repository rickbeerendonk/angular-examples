/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[App Component] Increment',
  props<{ value: number }>()
);

export const decrement = createAction('[App Component] Decrement');
