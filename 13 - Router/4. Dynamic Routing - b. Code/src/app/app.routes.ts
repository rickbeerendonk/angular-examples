/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page/:id', component: PageComponent }
];
