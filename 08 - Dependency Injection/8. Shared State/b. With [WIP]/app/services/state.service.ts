/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { EventEmitter } from '@angular/core';

export class StateService {
  color: string;
  switch = new EventEmitter();
}
