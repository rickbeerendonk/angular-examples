/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { GreetingEditorComponent } from '../greeting-editor/greeting-editor.component';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  protected greetingEditor = inject(GreetingEditorComponent);

  valueChanged(target: EventTarget | null) {
    this.greetingEditor.setValue((target as HTMLInputElement).value);
  }
}
