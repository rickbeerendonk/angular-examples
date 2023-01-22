/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditBoxComponent } from './edit-box/edit-box.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingEditorComponent } from './greeting-editor/greeting-editor.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    EditBoxComponent,
    GreetingComponent,
    GreetingEditorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
