/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './logger/logger.service';

import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  template: '<greeting>Should be replaced.</greeting>',
  imports: [GreetingComponent]
})
export class AppComponent {
  constructor(loggerService: LoggerService) {
    loggerService.log('AppComponent created.');
  }
}
