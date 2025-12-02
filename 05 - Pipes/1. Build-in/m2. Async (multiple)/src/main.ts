import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { QueueComponent } from './app/queue.component';

bootstrapApplication(QueueComponent, appConfig).catch(err =>
  console.error(err)
);
