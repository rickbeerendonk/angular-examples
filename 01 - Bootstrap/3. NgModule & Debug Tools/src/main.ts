/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// Manually import (with npm workspaces, zone.js isn't imported automatically)
import 'zone.js';

import { ApplicationRef } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(module => {
    let applicationRef = module.injector.get(ApplicationRef);
    let appComponent = applicationRef.components[0];

    // Enabled Angular debug tools that are accessible via your browser's developer console (via "ng.")
    // For Example: ng.profiler.timeChangeDetection()
    enableDebugTools(appComponent);
  })
  .catch(err => console.error(err));
