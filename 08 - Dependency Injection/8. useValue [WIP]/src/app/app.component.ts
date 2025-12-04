/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

@Component({
  selector: 'app',
  template: '<p>API Endpoint: {{ config.apiEndpoint }}</p>'
})
export class AppComponent {
  public config = inject<any>('AppConfig');
}
