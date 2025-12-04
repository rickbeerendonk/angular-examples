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
    LoggerService,
    // Alias: 'Logger' token points to the same instance as 'LoggerService'
    { provide: Logger, useExisting: LoggerService }
  ],
  template: '<greeting />'
})
export class AppComponent {
  private logger = inject(Logger);
  private loggerService = inject(LoggerService);

  constructor() {
    this.logger.info('AppComponent created.');
    // Both logger and loggerService refer to the same instance
    console.log('Same instance?', this.logger === this.loggerService);
  }
}
