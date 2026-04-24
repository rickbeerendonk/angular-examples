/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TopComponent } from './app/components/top.component';

bootstrapApplication(TopComponent, appConfig).catch(err => console.error(err));
