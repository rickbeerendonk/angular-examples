/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ApplicationRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { enableDebugTools } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { GreetingComponent } from './app/greeting.component';

bootstrapApplication(GreetingComponent, appConfig)
  .then((moduleRef: ApplicationRef) => {
    const componentRef = moduleRef.components[0];
    enableDebugTools(componentRef);
    console.log(
      'Debug tools enabled! Open DevTools and type: ng.profiler.timeChangeDetection()'
    );
  })
  .catch(err => console.error(err));
