/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { Logger } from './services/logger';

@Component({
  selector: 'app',
  template: '<greeting />'
})
export class AppComponent {
  constructor(logger: Logger) {
    logger.info('AppComponent created.');
  }
}
