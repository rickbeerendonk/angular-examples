/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, model } from '@angular/core';

@Component({
  selector: 'greeting-editor-input',
  templateUrl: './greeting-editor-input.component.html'
})
export class GreetingEditorInputComponent {
  value = model<string>();

  valueChanged(target: EventTarget | null) {
    const newValue = (target as HTMLInputElement)?.value;
    this.value.set(newValue);
  }
}
