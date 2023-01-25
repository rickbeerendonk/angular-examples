/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

export const ExtraRoutes: Routes = [
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component }
];
