/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  constructor(private appComponent: AppComponent) {}

  valueChanged(target: EventTarget | null) {
    this.appComponent.setValue((target as HTMLInputElement).value);
  }
}
