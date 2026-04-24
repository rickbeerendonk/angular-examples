/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CounterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
