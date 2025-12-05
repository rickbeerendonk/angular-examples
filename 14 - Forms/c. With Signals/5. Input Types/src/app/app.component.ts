/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { MyFormComponent } from './my-form.component';

@Component({
  selector: 'app',
  imports: [MyFormComponent],
  template: '<my-form></my-form>'
})
export class AppComponent {}
