import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { GreetingComponent } from './app/greeting.component';

bootstrapApplication(GreetingComponent, appConfig).catch(err =>
  console.error(err)
);
