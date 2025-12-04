/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NoMatchComponent } from './nomatch/nomatch.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  {
    path: 'extra',
    loadChildren: () =>
      import('./extra/extra.routes').then(mod => mod.ExtraRoutes)
  },
  { path: '**', component: NoMatchComponent }
];
