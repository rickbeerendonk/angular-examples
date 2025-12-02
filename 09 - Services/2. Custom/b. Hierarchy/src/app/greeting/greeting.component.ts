/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from '../logger/logger.service';

@Component({
  standalone: true,
  selector: 'greeting',
  template: '<h1>Hello {{getName()}}</h1>',
  providers: [LoggerService]
})
export class GreetingComponent {
  constructor(private loggerService: LoggerService) {
    loggerService.log('GreetingComponent created.');
  }

  getName(): string {
    this.loggerService.log('GreetingComponent.getName() called.');
    return 'World';
  }
}
