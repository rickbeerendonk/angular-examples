/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RippleDirective } from './ripple.directive';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [RippleDirective],
  templateUrl: './button.component.html'
})
export class ButtonComponent {}
