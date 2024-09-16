/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { Logger } from './services/logger';
import { LoggerService } from './services/logger.service';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [GreetingComponent],
  providers: [
    { provide: Logger, useClass: LoggerService }
    //{ provide: Logger, useClass: LoggerAltService }
  ],
  template: '<greeting />'
})
export class AppComponent {
  constructor(logger: Logger) {
    logger.info('AppComponent created.');
  }
}
