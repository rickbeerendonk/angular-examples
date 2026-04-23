/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, output } from '@angular/core';

@Component({
  selector: 'editor',
  template: `<button (click)="save()">Save</button>`
})
export class EditorComponent {
  // Internal name is `saved`, but parent listens via the alias `onSaved`
  saved = output<string>({ alias: 'onSaved' });

  save() {
    this.saved.emit('Draft saved');
  }
}
