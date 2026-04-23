/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { EditBoxComponent } from './edit-box/edit-box.component';

@Component({
  selector: 'app',
  imports: [EditBoxComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  value = 'Initial value';
}
