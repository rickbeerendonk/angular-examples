/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CsvPipe } from './csv.pipe';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [CsvPipe, DemoComponent],
  bootstrap: [DemoComponent]
})
export class AppModule {}
