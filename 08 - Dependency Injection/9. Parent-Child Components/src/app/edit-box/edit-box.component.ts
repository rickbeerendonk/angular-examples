/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrl: './edit-box.component.css'
})
export class EditBoxComponent {
  private readonly appComponent = inject(AppComponent);

  valueChanged(target: EventTarget | null) {
    this.appComponent.setValue((target as HTMLInputElement).value);
  }
}
