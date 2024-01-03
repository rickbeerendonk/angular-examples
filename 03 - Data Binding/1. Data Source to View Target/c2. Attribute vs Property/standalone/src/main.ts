/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { importProvidersFrom } from '@angular/core';
import { GreetingComponent } from './app/greeting.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(GreetingComponent, {
  providers: [importProvidersFrom(BrowserModule)]
});
