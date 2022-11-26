/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImportantAnchorComponent } from './important-anchor/important-anchor.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ImportantAnchorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
