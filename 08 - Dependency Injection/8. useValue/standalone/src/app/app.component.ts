/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: '<p>API Endpoint: {{ config.apiEndpoint }}</p>'
})
export class AppComponent {
  constructor(@Inject('AppConfig') public config: any) {}
}
