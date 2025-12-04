/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
  // The 'title' property automatically updates the browser tab title
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'page1', component: Page1Component, title: 'Page 1' },
  { path: 'page2', component: Page2Component, title: 'Page 2' }
];
