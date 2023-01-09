/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { GreetingComponent } from './greeting.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ChildComponent, GreetingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
