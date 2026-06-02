/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { InjectionToken } from '@angular/core';

// Create a custom injection token for the API endpoint
// This token can be used to inject the API endpoint string into services or components
export const API_ENDPOINT = new InjectionToken<string>('apiEndpoint');
