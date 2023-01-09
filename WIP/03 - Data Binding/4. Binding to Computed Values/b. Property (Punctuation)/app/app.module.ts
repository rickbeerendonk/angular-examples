/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimeStampComponent } from './timestamp.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [TimeStampComponent],
  bootstrap: [TimeStampComponent]
})
export class AppModule {}
