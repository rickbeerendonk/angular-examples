/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [GreetingComponent]
})
export class AppComponent {}
