/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

import { EditBoxComponent } from './edit-box/edit-box.component';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  imports: [EditBoxComponent, GreetingComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Be aware: Can be accessed by child components
  value = signal('');

  // Be aware: Can be accessed by child components
  // Can't be accessed by children if marked as
  //   "protected", or "private" (if not used in template)
  setValue(value: string) {
    this.value.set(value);
  }
}
