/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { EventEmitter } from '@angular/core';

export class StateService {
  // State
  color: string = 'red';

  // State Updaters
  switchColor() {
    this.color = this.color === 'red' ? 'green' : 'red';
    this.onChange.emit();
  }

  // Notification Event
  onChange = new EventEmitter();
}
