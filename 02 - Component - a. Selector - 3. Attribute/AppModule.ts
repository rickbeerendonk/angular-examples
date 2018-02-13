/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './AppComponent';
import GreetingComponent from './GreetingComponent';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, GreetingComponent],
  bootstrap: [AppComponent]
})
class AppModule { }

export default AppModule;