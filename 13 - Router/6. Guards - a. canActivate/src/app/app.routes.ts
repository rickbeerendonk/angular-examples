/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NoRightsComponent } from './no-rights/no-rights.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component, canActivate: [authGuard] },
  { path: 'page2', component: Page2Component, canActivate: [authGuard] },
  { path: 'no-rights', component: NoRightsComponent }
];
