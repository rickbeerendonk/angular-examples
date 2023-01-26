/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GreetingEditorDefaultComponent } from './greeting-editor-default.component';

@Component({
  selector: 'greeting-editor',
  standalone: true,
  imports: [CommonModule, GreetingEditorDefaultComponent],
  templateUrl: './greeting-editor.component.html'
})
export class GreetingEditorComponent {
  value = '';

  setValue(value: string) {
    this.value = value;
  }
}
