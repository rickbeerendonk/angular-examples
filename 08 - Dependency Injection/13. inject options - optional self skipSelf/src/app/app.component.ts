/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { ChildComponent } from './child.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app',
  imports: [ChildComponent],
  template: `<h1>inject() options</h1>
    <p>Parent logger id: {{ logger.id }}</p>
    <child />`,
  providers: [LoggerService]
})
export class AppComponent {
  protected readonly logger = inject(LoggerService);
}
