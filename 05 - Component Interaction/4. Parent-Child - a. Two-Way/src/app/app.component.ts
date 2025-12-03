/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { EditBoxComponent } from './edit-box/edit-box.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [EditBoxComponent]
})
export class AppComponent {
  value = signal('Initial value');
}
