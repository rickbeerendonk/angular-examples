/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
