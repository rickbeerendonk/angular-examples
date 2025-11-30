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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush change detection
  template: `<span>{{ value }}</span>`
})
export class DisplayComponent implements AfterViewChecked {
  private _value: Number = 0;
  public get value(): Number {
    return this._value;
  }
  @Input()
  public set value(value: Number) {
    console.log('DisplayComponent.value', value);
    this._value = value;
  }

  ngAfterViewChecked(): void {
    console.count('DisplayComponent.AfterViewChecked');
  }
}
