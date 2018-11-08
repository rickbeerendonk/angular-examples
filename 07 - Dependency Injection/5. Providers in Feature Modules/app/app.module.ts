/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingModule } from './greeting/greeting.module';
//import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [BrowserModule, GreetingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
  //providers: [LoggerService],
})
export class AppModule {}
