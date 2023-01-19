/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app',
  template: '<greeting>Should be replaced.</greeting>'
  //providers: [LoggerService]
})
export class AppComponent {
  constructor(loggerService: LoggerService) {
    loggerService.log('AppComponent created.');
  }
}
