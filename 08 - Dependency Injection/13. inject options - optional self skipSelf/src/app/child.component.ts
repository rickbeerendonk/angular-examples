/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject, InjectionToken } from '@angular/core';

import { LoggerService } from './logger.service';

const MISSING_TOKEN = new InjectionToken<string>('MISSING_TOKEN');

@Component({
  selector: 'child',
  template: `<h2>Child</h2>
    <p>Default logger id: {{ defaultLogger.id }}</p>
    <p>self logger id: {{ selfLogger.id }}</p>
    <p>skipSelf logger id: {{ parentLogger.id }}</p>
    <p>optional missing token: {{ optionalValue ?? 'null' }}</p>`,
  providers: [LoggerService]
})
export class ChildComponent {
  protected readonly defaultLogger = inject(LoggerService);
  protected readonly selfLogger = inject(LoggerService, { self: true });
  protected readonly parentLogger = inject(LoggerService, { skipSelf: true });
  protected readonly optionalValue = inject(MISSING_TOKEN, {
    optional: true
  });
}
