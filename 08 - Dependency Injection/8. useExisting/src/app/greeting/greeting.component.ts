/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { Logger } from '../services/logger';

@Component({
  selector: 'greeting',
  template: '<h1>Hello World</h1>'
})
export class GreetingComponent {
  // Injects Logger, which is aliased to LoggerService in AppComponent
  // Both will receive the same instance
  private logger = inject(Logger);

  constructor() {
    this.logger.warn('GreetingComponent created.');
  }
}
