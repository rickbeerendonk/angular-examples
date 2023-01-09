/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  prop1 = 'abc';
  prop2 = 123;
  prop3 = true;
}
