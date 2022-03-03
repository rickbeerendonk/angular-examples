/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ContainerComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] // To allow any element add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.
})
export class AppModule {}
