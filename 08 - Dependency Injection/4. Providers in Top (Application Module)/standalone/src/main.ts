/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

// Manually import (with npm workspaces, zone.js isn't imported automatically)
import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { LoggerService } from './app/services/logger.service';

bootstrapApplication(AppComponent, {
  providers: [LoggerService]
});
