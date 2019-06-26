/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { SubpageComponent } from './subpage/subpage.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'page1',
        component: Page1Component,
        children: [
          {
            path: 'sub/:id',
            outlet: 'subRouterOutlet',
            component: SubpageComponent
          }
        ]
      }
    ])
  ],
  declarations: [AppComponent, HomeComponent, Page1Component, SubpageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
