/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from '../logger/logger.service';

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{getName()}}</h1>'
})
export class GreetingComponent {
  constructor(private loggerService: LoggerService) {
    loggerService.log('GreetingComponent created.');
  }

  getName(): string {
    debugger;
    this.loggerService.log('GreetingComponent.getName() called.');
    return 'World';
  }
}
