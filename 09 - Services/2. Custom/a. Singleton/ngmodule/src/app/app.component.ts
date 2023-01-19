/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app',
  template: '<greeting>Should be replaced.</greeting>'
})
export class AppComponent {
  constructor(private loggerService: LoggerService) {
    loggerService.log('AppComponent created.');
  }
}
