/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1 title="-- {{name}} --">Hello {{ name }}!</h1>',
  standalone: true
})
export class GreetingComponent {
  name: string = 'World';
}
