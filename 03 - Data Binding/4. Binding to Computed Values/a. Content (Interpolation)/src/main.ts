import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TimeStampComponent } from './app/timestamp.component';

bootstrapApplication(TimeStampComponent, appConfig).catch(err =>
  console.error(err)
);
