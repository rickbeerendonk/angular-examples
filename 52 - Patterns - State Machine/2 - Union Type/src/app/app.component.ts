/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

type LoadState = 'idle' | 'loading' | 'loaded' | 'error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  state = signal<LoadState>('idle');
}
