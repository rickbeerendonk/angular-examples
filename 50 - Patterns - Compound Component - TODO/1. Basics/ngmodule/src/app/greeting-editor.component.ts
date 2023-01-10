/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Subject } from 'rxjs';
import { AfterContentInit, Component, ContentChildren } from '@angular/core';
import { GreetingEditorInputComponent } from './greeting-editor-input.component';
import { GreetingEditorTextComponent } from './greeting-editor-text.component';

@Component({
  selector: 'greeting-editor',
  template: '<ng-content></ng-content>'
})
export class GreetingEditorComponent implements AfterContentInit {
  name = new Subject<string>();

  @ContentChildren(GreetingEditorInputComponent) inputComponents =
    new Array<GreetingEditorInputComponent>();

  @ContentChildren(GreetingEditorTextComponent) textComponents =
    new Array<GreetingEditorTextComponent>();

  ngAfterContentInit() {
    // Subscribe to name changes
    this.name.subscribe(newName => {
      this.inputComponents.forEach(comp => (comp.value = newName));
      this.textComponents.forEach(comp => (comp.name = newName));
    });

    // Initialize name
    this.name.next('World');

    // Update name
    this.inputComponents.forEach(comp => {
      comp.change.subscribe(newValue => this.name.next(newValue));
    });
  }
}
