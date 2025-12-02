/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'display',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `<span>{{ value }}</span>`
})
export class DisplayComponent implements AfterViewChecked {
  @Input() value: Number = 0;

  ngAfterViewChecked(): void {
    console.count('DisplayComponent.AfterViewChecked');
  }
}
