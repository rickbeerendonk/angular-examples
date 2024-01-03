/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { importProvidersFrom } from '@angular/core';
import { GreetingEditorComponent } from './app/greetingeditor.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(GreetingEditorComponent, {
  providers: [importProvidersFrom(BrowserModule)]
});
