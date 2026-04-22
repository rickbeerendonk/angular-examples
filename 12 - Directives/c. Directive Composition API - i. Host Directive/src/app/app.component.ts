/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
