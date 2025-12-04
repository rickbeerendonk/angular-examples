/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'page1', component: Page1Component }
    ]
  },
  // Page2 uses different layout (no container)
  { path: 'page2', component: Page2Component }
];
