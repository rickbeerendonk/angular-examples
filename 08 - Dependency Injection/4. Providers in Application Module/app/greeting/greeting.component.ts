/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'greeting',
  template: '<h1>Hello World</h1>'
})
export class GreetingComponent {
  constructor(logger: LoggerService) {
    logger.warn('GreetingComponent created.');
  }
}
