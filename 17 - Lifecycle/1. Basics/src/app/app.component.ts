/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [GreetingComponent]
})
export class AppComponent {
  name = signal('A');
  show = signal(true);

  constructor() {
    setTimeout(() => this.name.set('B'), 500);
    setTimeout(() => this.show.set(false), 1000);
  }
}
