/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './AppModule';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
