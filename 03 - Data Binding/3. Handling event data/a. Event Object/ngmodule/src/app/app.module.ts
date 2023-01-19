/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LogTextComponent } from './logtext.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [LogTextComponent],
  bootstrap: [LogTextComponent]
})
export class AppModule {}
