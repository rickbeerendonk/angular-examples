/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023-2024 Rick Beerendonk     !*/

import { Component, model } from '@angular/core';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  value = model('World');

  valueChanged(target: EventTarget | null) {
    this.value.set((target as HTMLInputElement).value);
  }
}
