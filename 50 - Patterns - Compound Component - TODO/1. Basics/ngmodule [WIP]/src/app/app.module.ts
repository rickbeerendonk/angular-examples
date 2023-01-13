/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingEditorComponent } from './greeting-editor.component';
import { GreetingEditorInputComponent } from './greeting-editor-input.component';
import { GreetingEditorTextComponent } from './greeting-editor-text.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    GreetingEditorComponent,
    GreetingEditorInputComponent,
    GreetingEditorTextComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
