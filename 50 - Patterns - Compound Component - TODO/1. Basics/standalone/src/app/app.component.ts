/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingEditorComponent } from './greeting-editor.component';
import { GreetingEditorInputComponent } from './greeting-editor-input.component';
import { GreetingEditorTextComponent } from './greeting-editor-text.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [
    GreetingEditorComponent,
    GreetingEditorInputComponent,
    GreetingEditorTextComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
