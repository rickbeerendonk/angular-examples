/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, Inject } from '@angular/core';

import Logger from '../services/logger';

@Component({
  selector: 'greeting',
  standalone: true,
  providers: [{ provide: 'AltLogger', useExisting: Logger }],
  template: '<h1>Hello World</h1>'
})
export class GreetingComponent {
  constructor(@Inject('AltLogger') logger: Logger) {
    logger.warn('GreetingComponent created.');
  }
}
