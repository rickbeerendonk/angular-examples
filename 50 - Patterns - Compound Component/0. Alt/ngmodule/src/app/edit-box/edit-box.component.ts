/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingEditorComponent } from '../greeting-editor/greeting-editor.component';

@Component({
  selector: 'edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.css']
})
export class EditBoxComponent {
  constructor(private greetingEditor: GreetingEditorComponent) {}

  valueChanged(target: EventTarget | null) {
    this.greetingEditor.setValue((target as HTMLInputElement).value);
  }
}
