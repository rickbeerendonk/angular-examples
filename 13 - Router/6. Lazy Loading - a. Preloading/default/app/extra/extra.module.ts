/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'page3', component: Page3Component },
      { path: 'page4', component: Page4Component }
    ])
  ],
  declarations: [Page3Component, Page4Component]
})
export class ExtraModule {}
