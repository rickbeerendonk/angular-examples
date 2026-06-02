/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { InitStateService } from './init-state.service';

@Component({
  selector: 'app',
  template: `<h1>provideAppInitializer()</h1>
    <p style="color: gray">
      This example runs both provideAppInitializer() and APP_INITIALIZER.
    </p>
    <pre>{{
      logs().join(
        '
'
      )
    }}</pre>`
})
export class AppComponent {
  private readonly initState = inject(InitStateService);
  protected readonly logs = this.initState.logs;
}
