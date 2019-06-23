/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'greeting',
  template: '<h1>Hello World</h1>'
})
export class GreetingComponent {
  constructor(private loggerService: LoggerService) {
    loggerService.log('GreetingComponent created.');
  }
}
