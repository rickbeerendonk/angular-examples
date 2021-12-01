/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreetingEditorComponent } from './greetingeditor.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [GreetingEditorComponent],
  bootstrap: [GreetingEditorComponent]
})
export class AppModule {}
