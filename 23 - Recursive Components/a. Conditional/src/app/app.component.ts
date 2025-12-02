/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  template: ` <greeting /> `,
  imports: [GreetingComponent]
})
export class AppComponent {}
