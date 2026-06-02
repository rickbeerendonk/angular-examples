/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { InitStateService } from './init-state.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(async () => {
      const state = inject(InitStateService);
      state.add('provideAppInitializer() started');
      await new Promise<void>(resolve => setTimeout(resolve, 150));
      state.add('provideAppInitializer() finished');
    }),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const state = inject(InitStateService);
        return async () => {
          state.add('APP_INITIALIZER started');
          await new Promise<void>(resolve => setTimeout(resolve, 150));
          state.add('APP_INITIALIZER finished');
        };
      }
    }
  ]
};
