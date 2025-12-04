/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingComponent } from './greeting.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GreetingComponent, HelloComponent],
  exports: [GreetingComponent]
})
export class GreetingModule {}
