/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { LoggerService } from './services/logger.service';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  template: '<greeting />',
  imports: [GreetingComponent],
  providers: [LoggerService]
})
export class AppComponent {
  private readonly logger = inject(LoggerService);

  constructor() {
    this.logger.info('AppComponent created.');
  }
}
