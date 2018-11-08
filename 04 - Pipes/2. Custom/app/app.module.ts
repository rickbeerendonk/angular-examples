/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CsvPipe } from './csv.pipe';
import { GreetingComponent } from './greeting.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [CsvPipe, GreetingComponent],
  bootstrap: [GreetingComponent]
})
export class AppModule {}
