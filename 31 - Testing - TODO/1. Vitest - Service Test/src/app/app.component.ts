/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CounterService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(readonly service: CounterService) {}
}
