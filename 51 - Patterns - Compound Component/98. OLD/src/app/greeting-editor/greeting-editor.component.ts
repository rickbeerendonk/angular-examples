/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, contentChildren, effect, signal } from '@angular/core';
import { GreetingEditorInputComponent } from './greeting-editor-input.component';
import { GreetingEditorTextComponent } from './greeting-editor-text.component';

@Component({
  selector: 'greeting-editor',
  template: '<ng-content></ng-content>'
})
export class GreetingEditorComponent {
  name = signal('World');

  inputComponents = contentChildren(GreetingEditorInputComponent);
  textComponents = contentChildren(GreetingEditorTextComponent);

  constructor() {
    // React to name changes and update all components
    effect(() => {
      const currentName = this.name();
      this.inputComponents().forEach(comp => comp.value.set(currentName));
      this.textComponents().forEach(comp => comp.name()); // Just access to track
    });

    // Subscribe to input changes
    effect(() => {
      this.inputComponents().forEach(comp => {
        effect(() => {
          const newValue = comp.value();
          if (newValue) {
            this.name.set(newValue);
          }
        });
      });
    });
  }
}
