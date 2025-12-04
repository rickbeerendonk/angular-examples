/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app',
  template: '<greeting />',
  imports: [GreetingComponent]
})
export class AppComponent {
  constructor(logger: LoggerService) {
    logger.info('AppComponent created.');
  }
}
