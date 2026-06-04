/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app',
  imports: [EditorComponent],
  template: `
    <editor (saved)="onSaved($event)" />
    <p>Last message: {{ message() }}</p>
  `
})
export class AppComponent {
  message = signal('');

  onSaved(message: string) {
    this.message.set(message);
  }
}
