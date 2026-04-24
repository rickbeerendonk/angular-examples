/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

import { UserDashboardComponent } from './user-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [UserDashboardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  isLoggedIn = signal(false);

  logIn() {
    this.isLoggedIn.set(true);
  }

  logOut() {
    this.isLoggedIn.set(false);
  }
}
