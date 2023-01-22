/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  value: string = 'World';
  @Output() change = new EventEmitter<string>();

  valueChanged(target: EventTarget | null) {
    this.value = (target as HTMLInputElement).value;
    this.change.emit(this.value);
  }
}
