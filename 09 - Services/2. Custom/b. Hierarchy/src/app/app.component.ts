/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './logger/logger.service';

@Component({
  standalone: true,
  selector: 'app',
  template: '<greeting>Should be replaced.</greeting>'
  //providers: [LoggerService]
})
export class AppComponent {
  constructor(loggerService: LoggerService) {
    loggerService.log('AppComponent created.');
  }
}
