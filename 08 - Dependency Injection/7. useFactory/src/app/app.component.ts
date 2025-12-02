/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { Logger } from './services/logger';
import { LoggerService } from './services/logger.service';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  providers: [
    { provide: Logger, useClass: LoggerService }
    //{ provide: Logger, useClass: LoggerAltService }
  ],
  template: '<greeting />'
})
export class AppComponent {
  private logger = inject(Logger);

  constructor() {
    this.logger.info('AppComponent created.');
  }
}
