import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { AppConfig } from './config';
import { APP_CONFIG } from './config.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // useValue: Inject a constant value (configuration object)
    // The AppConfig object will be provided whenever APP_CONFIG is injected
    { provide: APP_CONFIG, useValue: AppConfig }
  ]
};
