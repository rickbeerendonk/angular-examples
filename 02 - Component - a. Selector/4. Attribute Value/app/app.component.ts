/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <div data-replace="true">Should be replaced.</div>
  <div data-replace="false">Should not be replaced.</div>
  `
})
export class AppComponent {
}
