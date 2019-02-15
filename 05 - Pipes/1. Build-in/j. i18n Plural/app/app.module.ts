/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';

registerLocaleData(localeNl, 'nl');

@NgModule({
  imports: [BrowserModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class AppModule {}
