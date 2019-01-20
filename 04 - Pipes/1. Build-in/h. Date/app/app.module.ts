/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';

registerLocaleData(localeNl, 'nl');

@NgModule({
  providers: [
    /* Dutch is the default now instead of en-US */
    { provide: LOCALE_ID, useValue: 'nl-NL' }
  ],
  imports: [BrowserModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class AppModule {}
