import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ClickMeComponent } from './app/clickme.component';

bootstrapApplication(ClickMeComponent, appConfig).catch(err =>
  console.error(err)
);
