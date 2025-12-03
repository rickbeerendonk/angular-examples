import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ParentComponent } from './app/parent.component';

bootstrapApplication(ParentComponent, appConfig).catch(err =>
  console.error(err)
);
