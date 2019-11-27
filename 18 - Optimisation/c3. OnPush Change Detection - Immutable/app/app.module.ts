/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiddleComponent } from './middle.component';
import { BottomComponent } from './bottom.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MiddleComponent, BottomComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
