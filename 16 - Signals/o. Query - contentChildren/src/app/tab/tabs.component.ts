/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, contentChildren } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ng-content></ng-content>
    <button (click)="report()">Report tabs</button>
  `
})
export class TabsComponent {
  // Signal<readonly TabComponent[]>
  tabs = contentChildren(TabComponent);

  report() {
    const titles = this.tabs()
      .map(t => t.title())
      .join(', ');
    alert(`Tabs: ${titles}`);
  }
}
