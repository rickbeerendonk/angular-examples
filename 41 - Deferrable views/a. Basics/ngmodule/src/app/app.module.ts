/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TopComponent } from './components/top.component';
import { MiddleComponent } from './components/middle.component';
import { BottomComponent } from './components/bottom.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [TopComponent, MiddleComponent, BottomComponent],
  bootstrap: [TopComponent]
})
export class AppModule {}
