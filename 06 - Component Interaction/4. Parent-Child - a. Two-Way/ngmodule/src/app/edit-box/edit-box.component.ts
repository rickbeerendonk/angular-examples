/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023-2024 Rick Beerendonk     !*/

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  // Required for two-way binding:
  // - <property> = name of @Input
  // - <property>Change = name of @Output
  @Input() value = 'World';
  @Output() valueChange = new EventEmitter<string>();

  valueChanged(target: EventTarget | null) {
    this.value = (target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
