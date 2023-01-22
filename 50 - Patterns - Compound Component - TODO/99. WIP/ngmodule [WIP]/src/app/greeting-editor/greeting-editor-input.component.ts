/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'greeting-editor-input',
  templateUrl: './greeting-editor-input.component.html'
})
export class GreetingEditorInputComponent {
  @Input() value?: string;

  @Output() change = new EventEmitter<string>();

  valueChanged(target: EventTarget | null) {
    this.value = (target as HTMLInputElement)?.value;
    this.change.emit(this.value);
  }
}
