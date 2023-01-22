/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreetingEditorModule } from './greeting-editor/greeting-editor.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, GreetingEditorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
