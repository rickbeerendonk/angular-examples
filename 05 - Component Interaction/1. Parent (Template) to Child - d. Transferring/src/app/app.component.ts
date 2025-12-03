/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { ImportantAnchorComponent } from './important-anchor/important-anchor.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [ImportantAnchorComponent]
})
export class AppComponent {}
