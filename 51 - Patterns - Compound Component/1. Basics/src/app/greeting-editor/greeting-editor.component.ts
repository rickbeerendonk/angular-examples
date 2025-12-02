/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting-editor',
  templateUrl: './greeting-editor.component.html'
})
export class GreetingEditorComponent {
  value = signal('');

  setValue(value: string) {
    this.value.set(value);
  }
}
