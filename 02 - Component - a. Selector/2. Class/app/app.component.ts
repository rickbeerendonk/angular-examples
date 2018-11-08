/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="replace">Should be replaced.</div>
    <div>Should not be replaced.</div>
  `
})
export class AppComponent {}
