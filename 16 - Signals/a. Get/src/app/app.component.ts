/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app',
  template: ` <h1>Hello {{ text() }}</h1> `
})
export class AppComponent {
  text: WritableSignal<string> = signal('World');
}
