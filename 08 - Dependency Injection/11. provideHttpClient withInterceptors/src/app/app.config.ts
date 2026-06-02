/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi
} from '@angular/common/http';

import { DataService } from './data.service';
import { cachingInterceptor } from './caching.interceptor';
import { loggingInterceptor } from './logging.interceptor';
import { LegacyLoggingInterceptor } from './legacy-logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([loggingInterceptor, cachingInterceptor]),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LegacyLoggingInterceptor,
      multi: true
    },
    DataService
  ]
};
