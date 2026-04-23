/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tab/tabs.component';

@Component({
  selector: 'app',
  imports: [TabComponent, TabsComponent],
  template: `
    <tabs>
      <tab title="Home" />
      <tab title="Profile" />
      <tab title="Settings" />
    </tabs>
  `
})
export class AppComponent {}
