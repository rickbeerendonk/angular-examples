/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'greeting',
  template: '<h1>Hello World</h1>',
  providers: [LoggerService]
})
export class GreetingComponent {
  constructor(logger: LoggerService) {
    logger.warn('GreetingComponent created.');
  }
}
