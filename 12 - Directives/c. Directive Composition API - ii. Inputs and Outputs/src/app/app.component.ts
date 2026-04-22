/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  lastTooltip = signal('none');

  onShown(text: string) {
    this.lastTooltip.set(text);
  }
}
