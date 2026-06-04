/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { GreetComponent } from './greeting/greet.component';

@Component({
  selector: 'app',
  imports: [GreetComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = signal('Angular');
}
