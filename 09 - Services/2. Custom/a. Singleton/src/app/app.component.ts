/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { LoggerService } from './logger/logger.service';

import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  template: '<greeting>Should be replaced.</greeting>',
  imports: [GreetingComponent]
})
export class AppComponent {
  private readonly loggerService = inject(LoggerService);

  constructor() {
    this.loggerService.log('AppComponent created.');
  }
}
