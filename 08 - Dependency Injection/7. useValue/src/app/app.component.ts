/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { APP_CONFIG, Config } from './config.token';

@Component({
  selector: 'app',
  template: `
    <h1>useValue Example</h1>
    <p>API Endpoint: {{ config.apiEndpoint }}</p>
    <p>Timeout: {{ config.timeout }}ms</p>
  `
})
export class AppComponent {
  // Inject the configuration object using the InjectionToken
  // The injected value is type-safe thanks to the Config interface
  public config: Config = inject(APP_CONFIG);
}
