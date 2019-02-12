/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatchComponent } from './match.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MatchComponent],
  bootstrap: [MatchComponent]
})
export class AppModule {}
