/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Structural Directives</h1>

    <p>flag1 is {{ flag1 }}, flag2 is {{ flag2 }}</p>
    <hr />

    <p *unless="flag1">1. Displayed unless flag1 is true</p>
    <p *unless="flag2">2. Displayed unless flag2 is true</p>
    <hr />

    <ng-template [unless]="flag1">
      <p>3. Displayed unless flag1 is true, using explicit ng-template tag</p>
    </ng-template>

    <ng-template [unless]="flag2">
      <p>4. Displayed unless flag2 is true, using explicit ng-template tag</p>
    </ng-template>
  `
})
export class AppComponent {
  flag1 = true;
  flag2 = false;
}
