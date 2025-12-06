import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TopComponent } from './app//components/top.component';

bootstrapApplication(TopComponent, appConfig).catch(err => console.error(err));
