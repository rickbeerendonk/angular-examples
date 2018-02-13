/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Greeting from './GreetingComponent';

@NgModule({
  imports: [BrowserModule],
  declarations: [Greeting],
  bootstrap: [Greeting]
})
class AppModule { }

export default AppModule;