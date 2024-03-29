/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NoRightsComponent } from './no-rights/no-rights.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component, canActivate: [authGuard] },
      { path: 'no-rights', component: NoRightsComponent }
    ])
  ],
  declarations: [AppComponent, HomeComponent, Page1Component, Page2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
