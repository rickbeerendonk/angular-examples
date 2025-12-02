/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './services/logger.service';

@Component({
  standalone: true,
  selector: 'app',
  template: '<greeting />'
  //providers: [LoggerService],
})
export class AppComponent {
  constructor(logger: LoggerService) {
    logger.info('AppComponent created.');
  }
}
