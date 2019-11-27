/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <input autofocus #text (keyup)="(0)" />
    <h1>App: Hello {{ text.value }}</h1>

    <hr />

    <middle></middle>
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class AppComponent {}
