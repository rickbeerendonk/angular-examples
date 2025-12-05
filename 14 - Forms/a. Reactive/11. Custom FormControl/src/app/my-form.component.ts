/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './toggle-switch.component';

@Component({
  selector: 'my-form',
  imports: [ReactiveFormsModule, ToggleSwitchComponent],
  template: `
    <div>
      Switch:
      <toggle-switch [formControl]="toggle" />
    </div>
    <p>Value: {{ toggle.value }}</p>
  `
})
export class MyFormComponent {
  toggle = new FormControl(false);
}
