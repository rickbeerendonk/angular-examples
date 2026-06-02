/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { bootstrapApplication } from '@angular/platform-browser';

import { GreetingComponent } from './app/greeting.component';
import { appConfig } from './app/app.config';

bootstrapApplication(GreetingComponent, appConfig).catch(err =>
  console.error(err)
);
