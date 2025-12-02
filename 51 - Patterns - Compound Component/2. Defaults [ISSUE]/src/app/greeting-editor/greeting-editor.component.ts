/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GreetingEditorDefaultComponent } from './greeting-editor-default.component';

@Component({
  selector: 'greeting-editor',
  imports: [CommonModule, GreetingEditorDefaultComponent],
  templateUrl: './greeting-editor.component.html'
})
export class GreetingEditorComponent {
  value = signal('');

  setValue(value: string) {
    this.value.set(value);
  }
}
