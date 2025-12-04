/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { Logger } from './services/logger';
import { LoggerService } from './services/logger.service';
import { LoggerAltService } from './services/logger-alt.service';
import { GreetingComponent } from './greeting/greeting.component';

// Factory function that decides which logger to use based on environment
function loggerFactory(isDevelopment: boolean): Logger {
  return isDevelopment ? new LoggerService() : new LoggerAltService();
}

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  providers: [
    {
      provide: Logger,
      useFactory: () => loggerFactory(true) // Change to false for production-like behavior
    }
  ],
  template: '<greeting />'
})
export class AppComponent {
  private logger = inject(Logger);

  constructor() {
    this.logger.info('AppComponent created.');
  }
}
