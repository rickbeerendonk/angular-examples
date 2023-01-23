/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingEditorComponent } from './greeting-editor.component';
import { GreetingEditorInputComponent } from './greeting-editor-input.component';
import { GreetingEditorTextComponent } from './greeting-editor-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GreetingEditorComponent,
    GreetingEditorInputComponent,
    GreetingEditorTextComponent
  ],
  exports: [
    GreetingEditorComponent,
    GreetingEditorInputComponent,
    GreetingEditorTextComponent
  ]
})
export class GreetingEditorModule {}
