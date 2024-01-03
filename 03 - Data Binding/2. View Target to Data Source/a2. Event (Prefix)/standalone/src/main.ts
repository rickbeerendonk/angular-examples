/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { importProvidersFrom } from '@angular/core';
import { ClickMeComponent } from './app/clickme.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(ClickMeComponent, {
  providers: [importProvidersFrom(BrowserModule)]
});
