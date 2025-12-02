/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToggleSwitchComponent } from './toggle-switch.component';

@Component({
  selector: 'my-form',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ],
  template: `
    <div>
      Switch:
      <toggle [formControl]="toggle" />
    </div>
  `
})
export class MyFormComponent {
  toggle = new FormControl(false);
}
