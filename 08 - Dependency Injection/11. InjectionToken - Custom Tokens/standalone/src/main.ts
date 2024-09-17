/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { API_ENDPOINT } from './app/api.token';
import { DataService } from './app/data.service';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: API_ENDPOINT, useValue: 'https://api.example.com' },
    DataService
  ]
});
