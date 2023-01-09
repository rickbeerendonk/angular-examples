/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingComponent } from './greeting.component';
import { LoggerService } from '../logger/logger.service';

@NgModule({
  imports: [CommonModule],
  declarations: [GreetingComponent],
  exports: [GreetingComponent],
  providers: [LoggerService]
})
export class GreetingModule {
  constructor(loggerService: LoggerService) {
    loggerService.log('GreetingModule created.');
  }
}
