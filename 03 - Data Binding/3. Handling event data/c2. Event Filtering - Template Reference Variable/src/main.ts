import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { GreetingEditorComponent } from './app/greetingeditor.component';

bootstrapApplication(GreetingEditorComponent, appConfig).catch(err =>
  console.error(err)
);
