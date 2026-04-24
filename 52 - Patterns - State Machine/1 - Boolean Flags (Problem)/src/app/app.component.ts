/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // 3 booleans => 8 combinations, only 4 are valid
  // (idle, loading, loaded, error). The other 4 are impossible.
  isLoading = signal(false);
  isLoaded = signal(false);
  hasError = signal(false);
}
