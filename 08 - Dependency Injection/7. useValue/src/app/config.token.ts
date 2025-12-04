/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { InjectionToken } from '@angular/core';

// Interface for type safety
export interface Config {
  apiEndpoint: string;
  timeout: number;
}

// InjectionToken allows type-safe injection of non-class values
// The string 'app.config' is a description for debugging
export const APP_CONFIG = new InjectionToken<Config>('app.config');
