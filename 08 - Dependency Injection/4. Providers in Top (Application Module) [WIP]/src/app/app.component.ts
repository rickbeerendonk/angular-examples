/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  template: '<greeting />'
})
export class AppComponent {
  private logger = inject(LoggerService);

  constructor() {
    this.logger.info('AppComponent created.');
  }
}
