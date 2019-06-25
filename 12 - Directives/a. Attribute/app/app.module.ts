/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmphasisDirective } from './emphasis.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, EmphasisDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
