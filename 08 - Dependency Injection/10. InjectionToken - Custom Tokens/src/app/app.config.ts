/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { DataService } from './data.service';
import { API_ENDPOINT } from './api.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    DataService,
    { provide: API_ENDPOINT, useValue: 'https://api.example.com/data' }
  ]
};
