import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LogTextComponent } from './app/logtext.component';

bootstrapApplication(LogTextComponent, appConfig).catch(err =>
  console.error(err)
);
