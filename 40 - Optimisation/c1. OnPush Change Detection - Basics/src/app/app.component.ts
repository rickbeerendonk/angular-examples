/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <input autofocus #text (keyup)="(0)" />
    <h1>App: Hello {{ text.value }}</h1>

    <hr />

    <greeting />
  `, // onKeyUp not handled, but Angular will update bindings after event.
  imports: [GreetingComponent]
})
export class AppComponent {}
