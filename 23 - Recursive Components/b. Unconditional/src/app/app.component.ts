/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  template: ` <greeting /> `
})
export class AppComponent {}
