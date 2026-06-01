/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { LoggerService } from '../logger/logger.service';

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{getName()}}</h1>',
  providers: [LoggerService]
})
export class GreetingComponent {
  private readonly loggerService = inject(LoggerService);

  constructor() {
    this.loggerService.log('GreetingComponent created.');
  }

  getName(): string {
    this.loggerService.log('GreetingComponent.getName() called.');
    return 'World';
  }
}
