/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingModule } from './greeting/greeting.module';

import { Logger } from './services/logger';
import { LoggerService } from './services/logger.service';
import { LoggerAltService } from './services/logger-alt.service';

@NgModule({
  imports: [BrowserModule, GreetingModule],
  declarations: [AppComponent],
  providers: [
    { provide: Logger, useClass: LoggerService }
    //{ provide: Logger, useClass: LoggerAltService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
