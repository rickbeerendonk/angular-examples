/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Subject, Subscription } from 'rxjs';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList
} from '@angular/core';

import { GreetingEditorInputComponent } from './greeting-editor-input.component';
import { GreetingEditorTextComponent } from './greeting-editor-text.component';

@Component({
  selector: 'greeting-editor',
  template: '<ng-content></ng-content>'
})
export class GreetingEditorComponent implements AfterContentInit, OnDestroy {
  name = new Subject<string>();
  inputComponentsChangeSubscriptions = new Array<Subscription>();

  @ContentChildren(GreetingEditorInputComponent)
  inputComponents!: QueryList<GreetingEditorInputComponent>;

  @ContentChildren(GreetingEditorTextComponent)
  textComponents!: QueryList<GreetingEditorTextComponent>;

  updateNames(newName: string) {
    this.inputComponents.forEach(comp => (comp.value = newName));
    this.textComponents.forEach(comp => (comp.name = newName));
  }

  ngAfterContentInit() {
    // Subscribe to name changes
    this.name.subscribe(newName => {
      this.updateNames(newName);
    });

    // Subscribe to inputComponent changes
    // No unsubscribe needed: https://github.com/angular/angular/blob/7d137d7f8872a6fba72668e32f9baf2c5dcfc48b/packages/core/src/linker/query_list.ts#L115
    this.inputComponents.changes.subscribe(components => {
      console.log(components);
    });

    // Subscribe to textComponents changes
    // No unsubscribe needed: https://github.com/angular/angular/blob/7d137d7f8872a6fba72668e32f9baf2c5dcfc48b/packages/core/src/linker/query_list.ts#L115
    this.textComponents.changes.subscribe(components => {
      console.log(JSON.stringify(components));
    });

    // Initialize name
    this.name.next('World');

    // Update name
    this.inputComponents.forEach(comp => {
      this.inputComponentsChangeSubscriptions.push(
        comp.change.subscribe(newValue => this.name.next(newValue))
      );
    });
  }

  ngOnDestroy() {
    while (this.inputComponentsChangeSubscriptions.length > 0) {
      this.inputComponentsChangeSubscriptions.pop()?.unsubscribe();
    }
  }
}
