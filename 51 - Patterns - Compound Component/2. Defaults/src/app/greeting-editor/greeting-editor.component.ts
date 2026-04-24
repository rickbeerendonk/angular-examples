/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, forwardRef, signal } from '@angular/core';

import { EditBoxComponent } from '../edit-box/edit-box.component';
import { GreetingComponent } from '../greeting/greeting.component';

// EditBoxComponent and GreetingComponent both `inject(GreetingEditorComponent)`,
// which creates a circular ES-module import:
//
//   greeting-editor -> edit-box -> greeting-editor
//   greeting-editor -> greeting  -> greeting-editor
//
// Without forwardRef, one side resolves to `undefined` during module init,
// so the @Component's `imports: [...]` ends up with `undefined` entries
// -> NG0919 at runtime ("Cannot read @Component metadata").
//
// `forwardRef(() => X)` defers the class lookup until after all modules
// finish loading, breaking the cycle.
@Component({
  selector: 'greeting-editor',
  imports: [
    forwardRef(() => EditBoxComponent),
    forwardRef(() => GreetingComponent)
  ],
  templateUrl: './greeting-editor.component.html'
})
export class GreetingEditorComponent {
  value = signal('');

  setValue(value: string) {
    this.value.set(value);
  }
}
