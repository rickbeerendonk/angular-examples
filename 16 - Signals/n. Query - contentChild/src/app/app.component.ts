/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app',
  imports: [PanelComponent],
  template: `
    <panel>
      <h1 #header>My Panel</h1>
      <p>Some content projected into the panel.</p>
    </panel>
  `
})
export class AppComponent {}
