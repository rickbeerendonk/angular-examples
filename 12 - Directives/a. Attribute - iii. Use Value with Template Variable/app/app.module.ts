/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MouseCapturedDirective } from './mouse-captured.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MouseCapturedDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
