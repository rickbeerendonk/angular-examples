/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CounterService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly service = inject(CounterService);
}
