/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';

@Component({
  imports: [GreetingComponent],
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {}
