import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoggerService } from './app/services/logger.service';
import { AppComponent } from './app/app.component';

//bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [LoggerService]
});
