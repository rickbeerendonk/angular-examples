/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EntriesPipe } from './entries.pipe';
import { KeysPipe } from './keys.pipe';
import { ValuesPipe } from './values.pipe';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EntriesPipe, KeysPipe, ValuesPipe, DemoComponent],
  bootstrap: [DemoComponent]
})
export class AppModule {}
