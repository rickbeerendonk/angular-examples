/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClickMeComponent } from './clickme.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ClickMeComponent],
  bootstrap: [ClickMeComponent]
})
export class AppModule {}
