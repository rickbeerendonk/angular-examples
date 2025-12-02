/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, model } from '@angular/core';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css'],
  standalone: true
})
export class EditBoxComponent {
  // model() replaces @Input + @Output combination
  // Automatically creates both input and output for two-way binding
  value = model('World');

  valueChanged(target: EventTarget | null) {
    // Setting the model value automatically emits the change
    this.value.set((target as HTMLInputElement).value);
  }
}
