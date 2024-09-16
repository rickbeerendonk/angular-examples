/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { bootstrapApplication } from '@angular/platform-browser';

import { AppConfig } from './app/config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [{ provide: 'AppConfig', useValue: AppConfig }]
});
