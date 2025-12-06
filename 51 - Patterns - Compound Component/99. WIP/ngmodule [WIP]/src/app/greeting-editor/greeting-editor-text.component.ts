/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'greeting-editor-text',
  standalone: true,
  template: '<h1>Hello {{name()}}!<h1>'
})
export class GreetingEditorTextComponent {
  name = input<string>();
}
