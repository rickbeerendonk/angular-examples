/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './services/logger1.service';

@Component({
  selector: 'app',
  template: '<greeting></greeting>'
})
export class AppComponent {
  constructor(logger: LoggerService) {
    logger.info('AppComponent created.');
  }
}
