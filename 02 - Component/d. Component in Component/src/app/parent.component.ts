/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2025 Rick Beerendonk     !*/

import { Component } from '@angular/core';

import { ChildComponent } from './child.component';

@Component({
  selector: 'app',
  imports: [ChildComponent],
  template: `
    <h1>Parent Component</h1>
    <child></child>
  `
})
export class ParentComponent {}
