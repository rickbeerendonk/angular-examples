/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NoMatchComponent } from './nomatch/nomatch.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
        { path: '**', component: NoMatchComponent }
      ],
      { useHash: true }
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    NoMatchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
