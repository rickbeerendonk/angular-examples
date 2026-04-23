/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `<div>{{ title() }}</div>`
})
export class TabComponent {
  title = input.required<string>();
}
