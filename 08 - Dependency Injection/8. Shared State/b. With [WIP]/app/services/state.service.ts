/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { EventEmitter } from 'stream';

export class StateService {
  color: string;
  switch = new EventEmitter();
}
