/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetComponent } from './greeting/greet.component';

@Component({
  selector: 'app',
  template: '<greet [name]="\'world\'" />',

  imports: [GreetComponent]
})
export class AppComponent {}
