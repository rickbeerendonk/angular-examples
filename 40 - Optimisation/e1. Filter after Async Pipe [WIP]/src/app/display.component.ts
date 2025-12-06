/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  effect,
  input
} from '@angular/core';

@Component({
  selector: 'display',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `<span>{{ value() }}</span>`
})
export class DisplayComponent implements AfterViewChecked {
  value = input<Number>(0);

  constructor() {
    effect(() => {
      console.log('DisplayComponent.value', this.value());
    });
  }

  ngAfterViewChecked(): void {
    console.count('DisplayComponent.AfterViewChecked');
  }
}
