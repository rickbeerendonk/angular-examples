/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-form',
  imports: [FormsModule],
  template: `
    <form>
      <label>
        Name:
        <input type="text" [(ngModel)]="name" name="name" />
      </label>
    </form>
  `
})
export class MyFormComponent {
  name = signal('Angular Form');
}
