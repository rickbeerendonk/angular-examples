/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QueueComponent } from './queue.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [QueueComponent],
  bootstrap: [QueueComponent]
})
export class AppModule {}
