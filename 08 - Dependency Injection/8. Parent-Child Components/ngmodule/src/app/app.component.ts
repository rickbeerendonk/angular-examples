/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Be aware: Can be accessed by child components
  value = '';

  // Be aware: Can be accessed by child components
  // Can't be accessed by children if marked as
  //   "protected", or "private" (if not used in template)
  setValue(value: string) {
    this.value = value;
  }
}
