/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GreetingComponent } from './person.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [GreetingComponent],
  bootstrap: [GreetingComponent]
})
export class AppModule {}
