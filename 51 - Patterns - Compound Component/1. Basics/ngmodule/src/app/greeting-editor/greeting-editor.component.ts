/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting-editor',
  templateUrl: './greeting-editor.component.html'
})
export class GreetingEditorComponent {
  value = '';

  setValue(value: string) {
    this.value = value;
  }
}
