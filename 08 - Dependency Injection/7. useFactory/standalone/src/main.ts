/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { Logger } from './app/services/logger';
import { LoggerService } from './app/services/logger.service';
import { LoggerAltService } from './app/services/logger-alt.service';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: Logger, useFactory: () => new LoggerService() }
    //{ provide: Logger, useFactory: () => new LoggerAltService() }
  ]
});
