/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUser = signal<User>({
    name: 'Rick Beerendonk',
    email: 'rick@oblicum.com'
  });
}
