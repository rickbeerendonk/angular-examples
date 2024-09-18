/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greeting/greet.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GreetComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
