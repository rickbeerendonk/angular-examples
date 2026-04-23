/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  template: `<h1>{{ label() }}</h1>`
})
export class CardComponent {
  // Property name is 'label', but the parent binds using the alias 'cardLabel'
  label = input('', { alias: 'cardLabel' }); // InputSignal<string>
}
