/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { HelloComponent } from './hello.component';

@Component({
  standalone: true,
  selector: 'greeting',
  imports: [HelloComponent],
  template: '<h1><hello /> World</h1>'
})
export class GreetingComponent {}
