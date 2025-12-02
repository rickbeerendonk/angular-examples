/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { GreetComponent } from './greeting/greet.component';

@Component({
  imports: [GreetComponent],
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = 'Angular';
}
