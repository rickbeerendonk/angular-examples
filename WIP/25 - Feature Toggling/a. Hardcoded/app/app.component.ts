/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  feature1 = environment.feature1;
}
