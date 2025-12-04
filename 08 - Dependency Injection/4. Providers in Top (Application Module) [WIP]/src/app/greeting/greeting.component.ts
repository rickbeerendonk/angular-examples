/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'greeting',
  template: '<h1>Hello World</h1>'
})
export class GreetingComponent {
  private logger = inject(LoggerService);

  constructor() {
    this.logger.warn('GreetingComponent created.');
  }
}
