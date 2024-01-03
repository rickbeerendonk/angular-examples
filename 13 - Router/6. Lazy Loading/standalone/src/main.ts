/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { Page1Component } from './app/page1/page1.component';
import { Page2Component } from './app/page2/page2.component';
import { NoMatchComponent } from './app/nomatch/nomatch.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      {
        path: 'extra',
        loadChildren: () =>
          import('./app/extra/extra.routes').then(mod => mod.ExtraRoutes)
      },
      { path: '**', component: NoMatchComponent }
    ])
  ]
});
