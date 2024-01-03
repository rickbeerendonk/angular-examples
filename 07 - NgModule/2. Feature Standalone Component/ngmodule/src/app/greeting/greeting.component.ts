/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { HelloComponent } from './hello.component';

@Component({
  selector: 'greeting',
  standalone: true,
  imports: [HelloComponent],
  template: '<h1><hello /> World</h1>'
})
export class GreetingComponent {}
