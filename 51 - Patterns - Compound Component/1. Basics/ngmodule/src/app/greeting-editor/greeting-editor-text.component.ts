/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'greeting-editor-text',
  template: '<h1>Hello {{name}}!<h1>'
})
export class GreetingEditorTextComponent {
  @Input() name?: string;
}
