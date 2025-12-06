/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'greeting',
  //changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `
    <input autofocus #text />
    <h1>Greeting: Hello {{ text.value }}</h1>
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class GreetingComponent {}
