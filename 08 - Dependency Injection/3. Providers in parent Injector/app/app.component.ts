/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app',
  template: '<greeting></greeting>',
  providers: [LoggerService],
})
export class AppComponent {
  constructor(logger: LoggerService) {
    logger.info('AppComponent created.');
  }
}
