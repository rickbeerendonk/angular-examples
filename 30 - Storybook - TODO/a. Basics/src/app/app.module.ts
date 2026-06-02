/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  imports: [BrowserModule, AppComponent, EditComponent, GreetingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
