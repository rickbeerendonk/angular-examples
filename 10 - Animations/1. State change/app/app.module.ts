/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [AppComponent, GreetingComponent],
  bootstrap: [AppComponent, GreetingComponent]
})
export class AppModule { }
