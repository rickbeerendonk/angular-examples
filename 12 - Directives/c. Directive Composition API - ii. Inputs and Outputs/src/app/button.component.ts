/*! Copyright © 2026 Rick Beerendonk !*/

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: TooltipDirective,
      inputs: ['tooltipText: tooltip'],
      outputs: ['tooltipShown: shown']
    }
  ],
  templateUrl: './button.component.html'
})
export class ButtonComponent {}
