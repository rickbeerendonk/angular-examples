/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <input #text (keyup)="(0)" />
    <h1>{{ text.value }}</h1>
  ` // onKeyUp not handled, but Angular will update bindings after event.
})
export class LogTextComponent {}
