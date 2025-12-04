/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { SubpageComponent } from './subpage/subpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'page1',
    component: Page1Component,
    children: [
      {
        path: 'sub/:id',
        component: SubpageComponent,
        outlet: 'subRouterOutlet'
      }
    ]
  }
];
